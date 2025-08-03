import React, { useState, useEffect } from 'react';
import { Card, Title, Text, Button, Badge } from '@mantine/core';
import TwitterLogin from './TwitterLogin';
import RecentRepliesCard from './RecentRepliesCard';
import SummaryCard from './SummaryCard';
import UpgradeCard from './UpgradeCard';

const API_BASE = import.meta.env.VITE_API_URL || 'https://api.verve.dev';
const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://app.verve.dev';
const MAIN_SITE_URL = import.meta.env.VITE_MAIN_SITE_URL || 'https://getverve.xyz';

const ORIGINS = [SITE_URL, 'http://localhost:5173', 'http://127.0.0.1:5173', MAIN_SITE_URL];

async function getClerkToken() {
  return new Promise((resolve) => {
    if (typeof chrome === 'undefined' || !chrome.cookies) {
      resolve(null);
      return;
    }
    let found = null;
    let pending = ORIGINS.length;
    ORIGINS.forEach((origin) => {
      chrome.cookies.get({ url: origin, name: '__session' }, (c) => {
        if (c?.value && !found) {
          found = c.value;
          resolve(found);
        }
        if (--pending === 0 && !found) resolve(null);
      });
    });
  });
}

export default function App() {
  const [authChecked, setAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const HeaderCard = () => (
    <Card className="verve-card" radius="md" style={{ padding: '12px 16px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
      <Title order={2} className="h-title" style={{ fontSize: 20, margin: 0 }}>{MAIN_SITE_URL.replace('https://', '')}</Title>
      <div style={{ display:'flex', gap:8, alignItems:'center' }}>
        <Text size="xs" weight={600} style={{ background:'#10B98120', color:'#10B981', padding:'2px 8px', borderRadius:6 }}>{plan}</Text>
        {typeof remainingQuota === 'number' && (
          <Badge color={remainingQuota > 5 ? 'green' : 'yellow'} variant="light">{Math.max(0, remainingQuota)}/15</Badge>
        )}
        <Button size="xs" variant="gradient" gradient={{ from: 'violet', to: 'indigo', deg: 45 }} style={{ animation:'pulse 2s infinite' }} onClick={() => chrome.tabs?.create({ url: `${MAIN_SITE_URL}/pricing` })}>
          Upgrade
        </Button>
      </div>
    </Card>
  );

  const [loggedInUser, setLoggedInUser] = useState(null);
  const [recentHistory, setRecentHistory] = useState([]);
  const [profileInfo, setProfileInfo] = useState(null);
  const [remainingQuota, setRemainingQuota] = useState(undefined);
  const [plan, setPlan] = useState('FREE');

  // On mount: determine if the Clerk session cookie exists → authenticated
  useEffect(() => {
    // inject pulse animation once
    const styleEl = document.createElement('style');
    styleEl.textContent = `@keyframes pulse {0%{box-shadow:0 0 0 0 rgba(167,139,250,.7);}70%{box-shadow:0 0 0 6px rgba(167,139,250,0);}100%{box-shadow:0 0 0 0 rgba(167,139,250,0);}}`;
    document.head.appendChild(styleEl);

    (async () => {
      const token = await getClerkToken();
      console.log('[Verve][App] getClerkToken →', token ? token.slice(0, 16) + '…' : 'null');

      if (token) {
        try {
          const res = await fetch(`${API_BASE}/users/me`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          console.log('[Verve][App] /users/me status', res.status);
          if (res.ok) {
            const data = await res.json();
            setPlan(data.plan || 'FREE');
            setIsAuthenticated(true);
            if (chrome?.storage?.local) chrome.storage.local.set({ clerkToken: token });
          } else {
            if (chrome?.storage?.local) chrome.storage.local.remove('clerkToken');
          }
        } catch (e) {
          console.error('[Verve][App] auth check error', e);
        }
      }
      setAuthChecked(true);
    })();
  }, []);

  // Debug: log key state changes
  useEffect(() => {
    console.log('[Verve][App] State', { authChecked, isAuthenticated, loggedInUser, remainingQuota, plan });
  }, [authChecked, isAuthenticated, loggedInUser, remainingQuota, plan]);

  // NEW: fetch profile & history whenever auth + loggedInUser are ready (covers popup reopen)
  useEffect(() => {
    if (!isAuthenticated || !loggedInUser) return;

    (async () => {
      const token = await getClerkToken();
      if (!token) {
        console.warn('[Verve][App] Cannot fetch profile – no Clerk token');
        return;
      }
      console.log('[Verve][App] Fetching profile via /users/me/profile');
      try {
        const res = await fetch(`${API_BASE}/users/me/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) {
          console.warn('[Verve][App] /users/me/profile failed', res.status);
          return;
        }
        const data = await res.json();
        console.log('[Verve][App] Profile →', data);
        setProfileInfo(data);
        const recent = data.recent_replies || [];
        setRecentHistory(recent);
        // Set quota from profile response
        if (typeof data.remaining_quota === 'number') {
          setRemainingQuota(data.remaining_quota);
          chrome.storage?.local.set({ quotaRemaining: data.remaining_quota });
        }
        chrome.storage?.local.set({ lastProfile: data, recentHistory: recent });
      } catch (e) {
        console.error('[Verve][App] profile fetch error', e);
      }
    })();
  }, [isAuthenticated, loggedInUser]);

  // Load cached history & profile and listen for changes
  useEffect(() => {
    function syncFromStorage() {
      chrome.storage?.local.get(['recentHistory','lastProfile','quotaRemaining'], ({ recentHistory, lastProfile, quotaRemaining }) => {
        if (recentHistory) setRecentHistory(recentHistory);
        if (lastProfile) setProfileInfo(lastProfile);
        if (typeof quotaRemaining === 'number') setRemainingQuota(quotaRemaining);
      });
    }
    syncFromStorage();
    const listener = (changes, area) => {
      if (area !== 'local') return;
      if (changes.recentHistory) setRecentHistory(changes.recentHistory.newValue || []);
      if (changes.lastProfile) setProfileInfo(changes.lastProfile.newValue || null);
      if (changes.quotaRemaining) setRemainingQuota(changes.quotaRemaining.newValue);
    };
    chrome.storage?.onChanged.addListener(listener);
    return () => chrome.storage?.onChanged.removeListener(listener);
  }, []);

  const openSignup = () => {
    if (typeof chrome !== 'undefined' && chrome.tabs) {
      chrome.tabs.create({ url: `${SITE_URL}/auth` });
    } else {
      window.open(`${SITE_URL}/auth`, '_blank');
    }
  };

  return (
    <div style={{ width: 320 }} className="stack-24">
      <HeaderCard />
      {!authChecked && (
        <Card className="verve-card" radius="md"><Text>Loading…</Text></Card>
      )}

      {/* If not logged in with Clerk, still allow TwitterLogin */}
      {authChecked && (!isAuthenticated || !loggedInUser) && (
        <Card className="verve-card" radius="md">
          <Title order={2} className="h-title" mb={12}>Connect Your Account</Title>
          <Text size="sm" color="#E0E0FF" mb={12}>Instantly craft premium, context-aware replies with AI.</Text>
          <TwitterLogin onLogin={setLoggedInUser} onHistory={setRecentHistory} onProfile={setProfileInfo} />
        </Card>
      )}

      {loggedInUser && (
        <>
          {plan === 'FREE' && remainingQuota <= 0 && <UpgradeCard />}
          {profileInfo && <SummaryCard profile={profileInfo} />}
          {recentHistory.length > 0 && <RecentRepliesCard history={recentHistory} />}

          {/* Logout button */}
          <Button fullWidth color="red" variant="outline" mt={16} onClick={() => {
            // Clear local Twitter auth/context
            chrome.storage?.local.remove(['twitterUser', 'toneReady'], () => {
              setLoggedInUser(null);
              setRecentHistory([]);
              setProfileInfo(null);
            });
          }}>Logout</Button>
        </>
      )}
    </div>
  );
}
