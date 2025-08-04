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

async function validateSession(token) {
  try {
    const response = await fetch(`${API_BASE}/users/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.ok;
  } catch (error) {
    console.error('[Verve] Session validation error:', error);
    return false;
  }
}

export default function App() {
  const [authChecked, setAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [recentHistory, setRecentHistory] = useState([]);
  const [profileInfo, setProfileInfo] = useState(null);
  const [remainingQuota, setRemainingQuota] = useState(undefined);
  const [plan, setPlan] = useState('FREE');
  const [authError, setAuthError] = useState('');

  const HeaderCard = () => (
    <Card 
      className="verve-card" 
      radius="md" 
      style={{ 
        padding: '16px 20px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '16px'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Title 
          order={2} 
          className="h-title" 
          style={{ 
            fontSize: '18px', 
            margin: 0, 
            color: '#FFFFFF',
            fontWeight: '700'
          }}
        >
          {MAIN_SITE_URL.replace('https://', '')}
        </Title>
      </div>
      
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <Badge 
          size="sm"
          style={{ 
            background: '#10B981', 
            color: '#FFFFFF', 
            fontWeight: '600',
            fontSize: '11px',
            padding: '4px 8px'
          }}
        >
          {plan}
        </Badge>
        
        {typeof remainingQuota === 'number' && (
          <Badge 
            size="sm"
            style={{ 
              background: remainingQuota > 5 ? '#10B981' : '#F59E0B', 
              color: '#FFFFFF', 
              fontWeight: '600',
              fontSize: '11px',
              padding: '4px 8px'
            }}
          >
            {Math.max(0, remainingQuota)}/15
          </Badge>
        )}
        
        <Button 
          size="xs" 
          style={{ 
            background: 'linear-gradient(135deg, #8C3EFF 0%, #D159FF 100%)',
            color: '#FFFFFF',
            fontWeight: '600',
            fontSize: '11px',
            padding: '6px 12px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: '0 2px 8px rgba(140, 62, 255, 0.3)'
          }}
          onClick={() => chrome.tabs?.create({ url: `${MAIN_SITE_URL}/pricing` })}
        >
          Upgrade
        </Button>
      </div>
    </Card>
  );

  const clearAllData = () => {
    chrome.storage?.local.remove(['clerkToken', 'twitterUser', 'toneReady', 'recentHistory', 'lastProfile', 'quotaRemaining'], () => {
      setIsAuthenticated(false);
      setLoggedInUser(null);
      setRecentHistory([]);
      setProfileInfo(null);
      setRemainingQuota(undefined);
      setPlan('FREE');
      setAuthError('');
    });
  };

  const checkAuthentication = async () => {
    const token = await getClerkToken();
    console.log('[Verve][App] getClerkToken →', token ? token.slice(0, 16) + '…' : 'null');

    if (token) {
      const isValid = await validateSession(token);
      if (isValid) {
        try {
          const res = await fetch(`${API_BASE}/users/me`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (res.ok) {
            const data = await res.json();
            setPlan(data.plan || 'FREE');
            setIsAuthenticated(true);
            setAuthError('');
            if (chrome?.storage?.local) chrome.storage.local.set({ clerkToken: token });
          } else {
            clearAllData();
            setAuthError('Session expired. Please login again.');
          }
        } catch (e) {
          console.error('[Verve][App] auth check error', e);
          clearAllData();
          setAuthError('Connection error. Please try again.');
        }
      } else {
        clearAllData();
        setAuthError('Session expired. Please login again.');
      }
    } else {
      clearAllData();
    }
    setAuthChecked(true);
  };

  // On mount: check authentication
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.textContent = `@keyframes pulse {0%{box-shadow:0 0 0 0 rgba(167,139,250,.7);}70%{box-shadow:0 0 0 6px rgba(167,139,250,0);}100%{box-shadow:0 0 0 0 rgba(167,139,250,0);}}`;
    document.head.appendChild(styleEl);

    checkAuthentication();
  }, []);

  // Monitor cookie changes for real-time logout detection
  useEffect(() => {
    if (typeof chrome === 'undefined' || !chrome.cookies) return;

    const handleCookieChange = (changeInfo) => {
      if (changeInfo.cookie.name === '__session' && changeInfo.removed) {
        console.log('[Verve] Session cookie removed, logging out');
        clearAllData();
        setAuthError('Logged out from website. Please login again.');
      }
    };

    chrome.cookies.onChanged.addListener(handleCookieChange);
    return () => chrome.cookies.onChanged.removeListener(handleCookieChange);
  }, []);

  // Periodic session validation (every 5 minutes)
  useEffect(() => {
    if (!isAuthenticated) return;

    const interval = setInterval(async () => {
      const token = await getClerkToken();
      if (token) {
        const isValid = await validateSession(token);
        if (!isValid) {
          clearAllData();
          setAuthError('Session expired. Please login again.');
        }
      }
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [isAuthenticated]);

  // Debug: log key state changes
  useEffect(() => {
    console.log('[Verve][App] State', { authChecked, isAuthenticated, loggedInUser, remainingQuota, plan, authError });
  }, [authChecked, isAuthenticated, loggedInUser, remainingQuota, plan, authError]);

  // Fetch profile & history whenever auth + loggedInUser are ready
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
          if (res.status === 401) {
            clearAllData();
            setAuthError('Session expired. Please login again.');
            return;
          }
          console.warn('[Verve][App] /users/me/profile failed', res.status);
          return;
        }
        const data = await res.json();
        console.log('[Verve][App] Profile →', data);
        setProfileInfo(data);
        const recent = data.recent_replies || [];
        setRecentHistory(recent);
        if (typeof data.remaining_quota === 'number') {
          setRemainingQuota(data.remaining_quota);
          chrome.storage?.local.set({ quotaRemaining: data.remaining_quota });
        }
        chrome.storage?.local.set({ lastProfile: data, recentHistory: recent });
      } catch (e) {
        console.error('[Verve][App] profile fetch error', e);
        setAuthError('Connection error. Please try again.');
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
    <div style={{ 
      width: 360, 
      padding: '16px',
      background: 'linear-gradient(180deg, #0B0F1E 0%, #1E1E3A 100%)',
      minHeight: '100vh'
    }}>
      <HeaderCard />
      
      {!authChecked && (
        <Card 
          className="verve-card" 
          radius="md" 
          style={{ 
            padding: '24px',
            textAlign: 'center'
          }}
        >
          <Text style={{ color: '#A0A4B8', fontSize: '14px' }}>Loading…</Text>
        </Card>
      )}

      {/* Show error message if authentication failed */}
      {authChecked && authError && (
        <Card 
          className="verve-card" 
          radius="md"
          style={{ 
            padding: '24px',
            background: 'linear-gradient(180deg, #1E1E3A 0%, #392F5A 100%)',
            border: '1px solid rgba(239, 68, 68, 0.3)'
          }}
        >
          <Title 
            order={3} 
            style={{ 
              fontSize: '16px',
              marginBottom: '8px',
              color: '#EF4444',
              textAlign: 'center'
            }}
          >
            Authentication Error
          </Title>
          <Text 
            size="sm" 
            style={{ 
              color: '#A0A4B8', 
              marginBottom: '16px',
              textAlign: 'center',
              fontSize: '13px',
              lineHeight: '1.4'
            }}
          >
            {authError}
          </Text>
          <Button 
            fullWidth
            style={{
              background: 'linear-gradient(135deg, #8C3EFF 0%, #D159FF 100%)',
              border: 'none',
              color: '#FFFFFF',
              fontWeight: '600',
              fontSize: '14px',
              padding: '12px 24px',
              borderRadius: '12px',
              transition: 'all 0.2s ease'
            }}
            onClick={() => chrome.tabs?.create({ url: `${MAIN_SITE_URL}` })}
          >
            Login at {MAIN_SITE_URL.replace('https://', '')}
          </Button>
        </Card>
      )}

      {/* If not authenticated with Clerk, show login prompt */}
      {authChecked && !isAuthenticated && !authError && (
        <Card 
          className="verve-card" 
          radius="md"
          style={{ 
            padding: '24px',
            background: 'linear-gradient(180deg, #1E1E3A 0%, #392F5A 100%)',
            border: '1px solid rgba(140, 62, 255, 0.2)'
          }}
        >
          <Title 
            order={2} 
            className="h-title" 
            style={{ 
              fontSize: '20px',
              marginBottom: '8px',
              color: '#FFFFFF',
              textAlign: 'center'
            }}
          >
            Please Login First
          </Title>
          <Text 
            size="sm" 
            style={{ 
              color: '#A0A4B8', 
              marginBottom: '20px',
              textAlign: 'center',
              fontSize: '13px',
              lineHeight: '1.4'
            }}
          >
            Login to your account on our website to use the extension.
          </Text>
          <Button 
            fullWidth
            style={{
              background: 'linear-gradient(135deg, #8C3EFF 0%, #D159FF 100%)',
              border: 'none',
              color: '#FFFFFF',
              fontWeight: '600',
              fontSize: '14px',
              padding: '12px 24px',
              borderRadius: '12px',
              transition: 'all 0.2s ease'
            }}
            onClick={() => chrome.tabs?.create({ url: `${MAIN_SITE_URL}` })}
          >
            Login at {MAIN_SITE_URL.replace('https://', '')}
          </Button>
        </Card>
      )}

      {/* If authenticated but no Twitter user, show Twitter login */}
      {authChecked && isAuthenticated && !loggedInUser && (
        <Card 
          className="verve-card" 
          radius="md"
          style={{ 
            padding: '24px',
            background: 'linear-gradient(180deg, #1E1E3A 0%, #392F5A 100%)',
            border: '1px solid rgba(140, 62, 255, 0.2)'
          }}
        >
          <Title 
            order={2} 
            className="h-title" 
            style={{ 
              fontSize: '20px',
              marginBottom: '8px',
              color: '#FFFFFF',
              textAlign: 'center'
            }}
          >
            Connect Your Twitter Account
          </Title>
          <Text 
            size="sm" 
            style={{ 
              color: '#A0A4B8', 
              marginBottom: '20px',
              textAlign: 'center',
              fontSize: '13px',
              lineHeight: '1.4'
            }}
          >
            Connect your Twitter account to start generating AI replies.
          </Text>
          <TwitterLogin onLogin={setLoggedInUser} onHistory={setRecentHistory} onProfile={setProfileInfo} />
        </Card>
      )}

      {/* If authenticated and Twitter user connected, show main interface */}
      {loggedInUser && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {plan === 'FREE' && remainingQuota <= 0 && <UpgradeCard />}
          {profileInfo && <SummaryCard profile={profileInfo} />}
          {recentHistory.length > 0 && <RecentRepliesCard history={recentHistory} />}

          {/* Logout button */}
          <Button 
            fullWidth 
            style={{ 
              background: 'transparent',
              border: '1px solid #EF4444',
              color: '#EF4444',
              fontWeight: '600',
              padding: '12px 24px',
              borderRadius: '12px',
              transition: 'all 0.2s ease'
            }}
            onClick={() => {
              clearAllData();
            }}
          >
            Logout
          </Button>
        </div>
      )}
    </div>
  );
}
