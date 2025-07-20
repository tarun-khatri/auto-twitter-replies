// src/TwitterLogin.jsx
import React, { useState, useEffect, useRef } from 'react';
import {
  Button,
  Group,
  Divider,
  TextInput,
  Modal,
  Switch,
  ActionIcon,
  Text,
  Notification,
} from '@mantine/core';
import { IconBrandX } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';
// Base REST & WS endpoints – fall back to production API if not provided at build
const API_BASE = import.meta.env.VITE_API_URL || 'https://api.verve.dev';
const WS_BASE = API_BASE.replace(/^http/, 'ws');

function fetchUserProfileWithToken(token) {
  return fetch(`${API_BASE}/users/me/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  }).then(r => {
    if (!r.ok) throw new Error('Profile fetch failed');
    return r.json();
  });
}

const ORIGINS = [
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
  'https://app.verve.dev',
  'https://getverve.xyz'
];

function getClerkTokenFallback() {
  return new Promise((resolve) => {
    // 1) Try cache first
    chrome.storage?.local.get('clerkToken', ({ clerkToken }) => {
      if (clerkToken) {
        console.log('[Verve] Clerk token (cached):', clerkToken.slice(0, 16) + '…');
        resolve(clerkToken);
        return;
      }

      if (!chrome.cookies) {
        console.warn('[Verve] chrome.cookies API unavailable');
        resolve(null);
        return;
      }

      // 2) Scan known origins for the freshest __session cookie
      let found = null;
      let pending = ORIGINS.length;
      ORIGINS.forEach((origin) => {
        chrome.cookies.get({ url: origin, name: '__session' }, (c) => {
          console.log('[Verve] Cookie lookup', origin, c ? '✅' : '—');
          if (c?.value && !found) {
            found = c.value;
            chrome.storage?.local.set({ clerkToken: found });
            console.log('[Verve] Clerk token (cookie):', found.slice(0, 16) + '…');
            resolve(found);
          }
          if (--pending === 0 && !found) {
            console.warn('[Verve] Clerk token NOT found');
            resolve(null);
          }
        });
      });
    });
  });
}

export default function TwitterLogin({ onLogin, onHistory, onProfile }) {
  const userId = null; // no Clerk auth
  const [user, setUser] = useState(null);
  const [msg, setMsg] = useState('');
  const [analysisStatus, setStatus] = useState('');
  const [progress, setProgress] = useState(0);
  const [manualUsername, setManualUsername] = useState("");
  const [manualStatus, setManualStatus] = useState("");
  const [profile, setProfile] = useState(null);
  const [history, setHistory] = useState([]);
  const [settings, setSettings] = useState({ autoCopy: false, notifications: true });
  const [feedback, setFeedback] = useState("");
  const { isOpen: isSettingsOpen, onOpen: onSettingsOpen, onClose: onSettingsClose } = useDisclosure(); // settings modal retained but no icon
  const { isOpen: isFeedbackOpen, onOpen: onFeedbackOpen, onClose: onFeedbackClose } = useDisclosure();
  const socketRef = useRef(null);
  const premium = true; // Example: set to true if user is premium

  useEffect(() => {
    chrome.storage.local.get(['twitterUser','toneReady'], ({ twitterUser, toneReady }) => {
      if (twitterUser) {
        setUser(twitterUser);
        onLogin?.(twitterUser);
        if (!toneReady) {
          setStatus('Starting profile analysis…');
        }
      }
    });
  }, [onLogin]);

  // Live update history from content script
  useEffect(() => {
    function handleChange(changes, area) {
      if (area === 'local' && changes.recentHistory) {
        setHistory(changes.recentHistory.newValue || []);
      }
    }
    chrome.storage.onChanged.addListener(handleChange);
    return () => chrome.storage.onChanged.removeListener(handleChange);
  }, []);

  useEffect(() => {
    if (!user) return;
    chrome.storage.local.get('toneReady', ({ toneReady }) => {
      if (toneReady) {
        setStatus('Profile already analyzed.');
        return;
      }
      setStatus('Connecting to analysis service…');
      const ws = new WebSocket(`${WS_BASE}/ws/scrape/${user.username}`);
      socketRef.current = ws;
      ws.onopen = () => { };
      ws.onmessage = ({ data }) => {
        const msg = JSON.parse(data);
        if (msg.status === 'completed') {
          setProgress(msg.tweets_found >= 400 ? 100 : 100);
          setStatus(`Fetched ${msg.tweets_found} tweets. Analysis done!`);
          chrome.storage.local.set({ toneReady: true });
          ws.close();
        }
      };
      ws.onerror = () => setStatus('Error during analysis. Please try again later.');
      ws.onclose = () => {};
      return () => { if (socketRef.current) socketRef.current.close(); };
    });
  }, [user]);

  const login = () => {
    setMsg('Opening login window…');
    const popup = window.open(
      'http://localhost:3000?start=true',
      'twitterAuth',
      'width=600,height=700'
    );
    if (!popup) setMsg('Popup blocked. Please allow popups for this site.');
  };

  const logout = () => {
    if (socketRef.current) socketRef.current.close();
    chrome.storage.local.remove(['twitterUser','toneReady'], () => {
      setUser(null);
      setMsg('Logged out — you can switch accounts now.');
      setStatus('');
      onLogin?.(null);
    });
  };

  useEffect(() => {
    const onMessage = (e) => {
      if (e.data?.type === 'AUTH_SUCCESS') {
        const u = e.data.user;
        chrome.storage.local.set({ twitterUser: u, toneReady: false }, () => {
          setUser(u);
          onLogin?.(u);
          setMsg(`Logged in as ${u.username}`);
          getClerkTokenFallback().then(token => {
            const headers = { 'Content-Type': 'application/json' };
            if (token) headers.Authorization = `Bearer ${token}`;
            fetch(`${API_BASE}/users/register`, {
              method: 'POST',
              headers,
              body: JSON.stringify({
                twitter_handle: u.username
              })
            }).catch(() => setStatus('Error registering user.'));
          });
        });
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [onLogin]);

  const handleManualSubmit = async (e) => {
    e.preventDefault();
    if (!manualUsername.trim()) {
      setManualStatus("Please enter a valid username.");
      return;
    }
    setManualStatus("Analyzing tweets for @" + manualUsername + "…");
    const pseudoUser = { username: manualUsername.trim(), uid: null };
    chrome.storage.local.set({ twitterUser: pseudoUser, toneReady: false }, async () => {
      setUser(pseudoUser);
      onLogin?.(pseudoUser);
      getClerkTokenFallback().then(token => {
        const headers = { 'Content-Type': 'application/json' };
        if (token) headers.Authorization = `Bearer ${token}`;
        fetch(`${API_BASE}/users/register`, {
          method: 'POST',
          headers,
          body: JSON.stringify({
            twitter_handle: manualUsername.trim()
          })
        })
          .then(() => setManualStatus("Analysis started for @" + manualUsername))
          .catch(() => setManualStatus("Error starting analysis. Try again."));
      });
    });
  };

  useEffect(() => {
    if (!user) return;
    getClerkTokenFallback().then(token => {
      if (!token) {
        console.warn('[Verve] No Clerk token – skipping /users/me/profile fetch');
        return;
      }
      console.log('[Verve] Fetching profile with token', token.slice(0, 16) + '…');
      fetchUserProfileWithToken(token)
        .then(data => {
          console.log('[Verve] /users/me/profile →', data);
          setProfile(data);
          onProfile?.(data);
          const recent = data.recent_replies || [];
          setHistory(recent);
          chrome.storage.local.set({ recentHistory: recent, lastProfile: data });
        })
        .catch(err => {
          console.error('[Verve] Profile fetch error', err);
        });
    });
  }, [user, progress]);

  // Load cached history on mount
  useEffect(() => {
    chrome.storage.local.get('recentHistory', ({ recentHistory }) => {
      if (recentHistory?.length) setHistory(recentHistory);
    });
  }, []);

  // Helper to render history items
  const historyList = history.length ? (
    <>
      <Divider my="sm" />
      <Text weight={600} size="sm" mb={4}>Recent AI Replies</Text>
      <div style={{ maxHeight: 120, overflowY: 'auto' }}>
        {history.slice(-5).reverse().map((h, idx) => (
          <div key={idx} style={{ marginBottom: 8 }}>
            <Text size="xs" color="dimmed" style={{ whiteSpace: 'pre-wrap' }}>{h.tweet}</Text>
            <Text size="xs">{h.reply}</Text>
            <Divider my={4} />
          </div>
        ))}
      </div>
    </>
  ) : null;

  const handleCopy = (reply) => {
    navigator.clipboard.writeText(reply);
    showNotification({ title: 'Copied to clipboard', message: '', color: 'green', duration: 1200 });
  };

  const handleFeedbackSubmit = () => {
    setFeedback("");
    onFeedbackClose();
    showNotification({ title: 'Feedback sent! Thank you.', message: '', color: 'green', duration: 2000 });
  };

  // Whenever history updates, notify parent
  useEffect(() => {
    onHistory?.(history);
  }, [history]);

  return (
    <>
      {!user ? (
        <>
          <Button fullWidth className="verve-btn" leftIcon={<IconBrandX size={18} />} onClick={login}>
            Login with X
          </Button>
          <Divider label="or" my="md" labelPosition="center" />
          <form onSubmit={handleManualSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 8 }}>
            <TextInput
              className="verve-input"
              label="Enter X (Twitter) Username"
              placeholder="e.g. elonmusk"
              value={manualUsername}
              onChange={e => setManualUsername(e.currentTarget.value)}
              required
            />
            <Button type="submit" className="verve-btn-outline" fullWidth>Analyze without login</Button>
            {manualStatus && <Text size="xs" color="dimmed" mt={4}>{manualStatus}</Text>}
          </form>
        </>
      ) : (
        <>
          {/* Additional summary UI moved to popup cards */}
          <Divider my="sm" />
          <Group position="apart">
            <Button color="red" onClick={logout}>Logout</Button>
          </Group>
        </>
      )}
      {/* Settings Modal */}
      <Modal opened={isSettingsOpen} onClose={onSettingsClose} title="Settings" centered>
        <Switch label="Auto-copy replies" checked={settings.autoCopy} onChange={e => setSettings(s => ({ ...s, autoCopy: e.target.checked }))} mb="md" />
        <Switch label="Enable notifications" checked={settings.notifications} onChange={e => setSettings(s => ({ ...s, notifications: e.target.checked }))} mb="md" />
      </Modal>
      {/* Feedback Modal */}
      <Modal opened={isFeedbackOpen} onClose={onFeedbackClose} title="Feedback & Support" centered>
        <TextInput label="Your email" placeholder="you@example.com" mb="md" />
        <TextInput label="Message" placeholder="How can we help?" mb="md" />
        <Button fullWidth color="blue" onClick={handleFeedbackSubmit}>Send</Button>
      </Modal>
      {/* Notifications */}
      {msg && (
        <Notification color="green" onClose={() => setMsg('')} mt="md">
          {msg}
        </Notification>
      )}
    </>
  );
}
