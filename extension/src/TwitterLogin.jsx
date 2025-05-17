// src/TwitterLogin.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaUserCircle, FaCheckCircle, FaSyncAlt, FaInfoCircle, FaChevronDown, FaChevronUp, FaCommentDots, FaMagic } from 'react-icons/fa';

function fetchUserProfile(userId) {
  return fetch(`http://localhost:8000/users/${userId}/profile`).then(r => r.json());
}

export default function TwitterLogin({ onLogin }) {
  const [user, setUser]             = useState(null);
  const [msg, setMsg]               = useState('');
  const [analysisStatus, setStatus] = useState('');
  const [progress, setProgress]     = useState(0);
  const [manualUsername, setManualUsername] = useState("");
  const [manualStatus, setManualStatus] = useState("");
  const [profile, setProfile]       = useState(null);
  const [history, setHistory]       = useState([]);
  const [showSummary, setShowSummary] = useState(false);
  const socketRef                   = useRef(null);

  // 1) Load from chrome.storage.local on mount
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

  // 2) Whenever `user` becomes non-null _and_ toneReady is false, open WS
  useEffect(() => {
    if (!user) return;

    chrome.storage.local.get('toneReady', ({ toneReady }) => {
      if (toneReady) {
        setStatus('Profile already analyzed.');
        return;
      }

      setStatus('Connecting to analysis service…');
      const ws = new WebSocket(`ws://localhost:8000/ws/scrape/${user.username}`);
      socketRef.current = ws;

      ws.onopen = () => {
        console.log('[WS] open');
      };

      ws.onmessage = ({ data }) => {
        const msg = JSON.parse(data);
        console.log('[WS] message', msg);

        if (msg.status === 'completed') {
          setProgress(msg.tweets_found >= 400 ? 100 : 100);
          setStatus(`Fetched ${msg.tweets_found} tweets. Analysis done!`);
          chrome.storage.local.set({ toneReady: true });
          ws.close();
        }
      };

      ws.onerror = (err) => {
        console.error('[WS] error', err);
        setStatus('Error during analysis. Please try again later.');
      };

      ws.onclose = () => {
        console.log('[WS] closed');
      };

      // cleanup on unmount or user change
      return () => {
        if (socketRef.current) socketRef.current.close();
      };
    });
  }, [user]);

  // 3) Kick off login via the landing page
  const login = () => {
    setMsg('Opening login window…');
    const popup = window.open(
      'http://localhost:3000?start=true',
      'twitterAuth',
      'width=600,height=700'
    );
    if (!popup) setMsg('Popup blocked. Please allow popups for this site.');
  };

  // 4) Handle logout
  const logout = () => {
    if (socketRef.current) socketRef.current.close();
    chrome.storage.local.remove(['twitterUser','toneReady'], () => {
      setUser(null);
      setMsg('Logged out — you can switch accounts now.');
      setStatus('');
      onLogin?.(null);
    });
  };

  // 5) Listen for AUTH_SUCCESS from landing
  useEffect(() => {
    const onMessage = (e) => {
      if (e.data?.type === 'AUTH_SUCCESS') {
        const u = e.data.user;
        // persist and register
        chrome.storage.local.set({ twitterUser: u, toneReady: false }, () => {
          setUser(u);
          onLogin?.(u);
          setMsg(`Logged in as ${u.username}`);
          fetch('http://localhost:8000/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              user_id: u.uid,
              twitter_handle: u.username
            })
          }).catch(err => {
            console.error('Registration error', err);
            setStatus('Error registering user.');
          });
        });
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [onLogin]);

  // Manual username submit handler
  const handleManualSubmit = async (e) => {
    e.preventDefault();
    if (!manualUsername.trim()) {
      setManualStatus("Please enter a valid username.");
      return;
    }
    setManualStatus("Analyzing tweets for @" + manualUsername + "…");
    // Store as a pseudo-user (no uid, just username)
    const pseudoUser = { username: manualUsername.trim(), uid: null };
    chrome.storage.local.set({ twitterUser: pseudoUser, toneReady: false }, () => {
      setUser(pseudoUser);
      onLogin?.(pseudoUser);
      // Register and trigger backend analysis
      fetch('http://localhost:8000/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: manualUsername.trim(),
          twitter_handle: manualUsername.trim()
        })
      })
        .then(() => setManualStatus("Analysis started for @" + manualUsername))
        .catch(() => setManualStatus("Error starting analysis. Try again."));
    });
  };

  // Fetch profile and history when user is set and analyzed
  useEffect(() => {
    if (user && user.username) {
      fetchUserProfile(user.uid || user.username).then(data => {
        setProfile(data);
        setHistory(data.recent_replies || []);
      });
    }
  }, [user, progress]);

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <FaMagic className="header-icon" />
          <span className="header-title">Twitter Auto Reply</span>
        </div>
        <div className="divider" />
        {user ? (
          <>
            <div className="profile-row">
              <FaUserCircle className="profile-avatar" />
              <div className="profile-info">
                <span className="profile-username">@{user.username}</span>
                <span className="profile-status">
                  <FaCheckCircle color="#22c55e" style={{marginRight:4}} /> Profile analyzed
                </span>
              </div>
            </div>
            <div className="summary-toggle-row">
              <button className="summary-toggle-btn" onClick={() => setShowSummary(v => !v)}>
                <FaCommentDots style={{marginRight:6}}/>
                {showSummary ? 'Hide Tone/Style Summary' : 'Show Tone/Style Summary'}
                {showSummary ? <FaChevronUp style={{marginLeft:8}}/> : <FaChevronDown style={{marginLeft:8}}/>}
              </button>
            </div>
            {showSummary && (
              <div className="summary-box modern-scroll">
                <span className="summary-label">Tone/Style Summary:</span>
                <span className="summary-value">{profile ? profile.tone_summary : '(loading...)'}</span>
              </div>
            )}
            <div className="history-box modern-scroll">
              <span className="history-label">Recent Replies:</span>
              <ul className="history-list">
                {history.length === 0 && <li className="history-empty">No replies yet.</li>}
                {history.slice(-3).reverse().map((item, i) => (
                  <li key={i} className="history-item">
                    <div className="history-tweet"><FaCommentDots style={{marginRight:4, color:'#1DA1F2'}}/>{item.tweet}</div>
                    <div className="history-reply">{item.reply}</div>
                  </li>
                ))}
              </ul>
            </div>
            <button onClick={logout} className="logout-btn">Logout</button>
            <button className="reanalyze-btn" onClick={()=>window.location.reload()}><FaSyncAlt style={{marginRight:6}}/>Re-analyze</button>
            <div className="status-box">
              <p>{analysisStatus || 'Waiting to analyze your profile…'}</p>
              {progress > 0 && (
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: `${progress}%` }} />
                </div>
              )}
            </div>
            <div className="footer-row">
              <a href="https://yourwebsite.com/help" target="_blank" rel="noopener noreferrer" className="footer-link">Help</a>
              <span className="footer-divider">|</span>
              <a href="https://yourwebsite.com/feedback" target="_blank" rel="noopener noreferrer" className="footer-link">Feedback</a>
              <span className="footer-divider">|</span>
              <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="footer-link"><FaInfoCircle style={{marginRight:4}}/>About</a>
              <span className="footer-divider">|</span>
              <a href="#" className="footer-link" onClick={()=>chrome.storage.local.remove(['twitterUser','toneReady'],()=>window.location.reload())}>Try another username</a>
            </div>
          </>
        ) : (
          <>
            <button onClick={login} className="login-btn">Login with X</button>
            <div className="or-divider"><span>or</span></div>
            <form onSubmit={handleManualSubmit} className="manual-form">
              <input
                type="text"
                className="username-input"
                placeholder="Enter any public X username"
                value={manualUsername}
                onChange={e => setManualUsername(e.target.value)}
                autoFocus
              />
              <button type="submit" className="analyze-btn">Analyze</button>
            </form>
            {manualStatus && <p className="manual-status">{manualStatus}</p>}
            {msg && <p className="msg-status">{msg}</p>}
            <div className="footer-row">
              <a href="https://yourwebsite.com/help" target="_blank" rel="noopener noreferrer" className="footer-link">Help</a>
              <span className="footer-divider">|</span>
              <a href="https://yourwebsite.com/feedback" target="_blank" rel="noopener noreferrer" className="footer-link">Feedback</a>
              <span className="footer-divider">|</span>
              <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="footer-link"><FaInfoCircle style={{marginRight:4}}/>About</a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
