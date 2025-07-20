import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import ReplyOptionsOverlay from "./ReplyOptionsOverlay";
import { FaMagic } from "react-icons/fa";

const BACKEND_URL = import.meta.env.VITE_API_URL || 'https://api.verve.dev';
const ORIGINS = [
  // dev origins first
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
  // prod origins
  'https://app.verve.dev',
  'https://getverve.xyz',
];

function getClerkToken() {
  return new Promise(resolve => {
    if (!chrome.cookies) {
      chrome.storage?.local.get('clerkToken', ({ clerkToken }) => resolve(clerkToken || null));
      return;
    }

    const now = Date.now() / 1000; // seconds

    let index = 0;
    const checkNext = () => {
      if (index >= ORIGINS.length) {
        // None found → fallback to cached value
        chrome.storage?.local.get('clerkToken', ({ clerkToken }) => resolve(clerkToken || null));
        return;
      }

      const origin = ORIGINS[index++];
      chrome.cookies.get({ url: origin, name: '__session' }, cookie => {
        if (cookie?.value && cookie.path === '/' && (!cookie.expirationDate || cookie.expirationDate > now + 5)) {
          chrome.storage?.local.set({ clerkToken: cookie.value });
          resolve(cookie.value);
        } else {
          checkNext();
        }
      });
    };

    checkNext();
  });
}

// Fetch wrapper that always uses the freshest Clerk cookie and retries once on 401
async function fetchWithFreshToken(url, opts = {}) {
  let token = await getClerkToken();
  if (!token) throw new Error('No Clerk token found');

  const logExp = (t) => {
    try {
      const payload = JSON.parse(atob(t.split('.')[1]));
      console.debug('[AI Reply] using token exp:', payload.exp);
    } catch {}
  };

  const doFetch = (t) => {
    logExp(t);
    return fetch(url, {
      ...opts,
      headers: { ...(opts.headers || {}), Authorization: `Bearer ${t}` },
    });
  };

  let res = await doFetch(token);
  if (res.status === 401) {
    console.warn('[AI Reply] JWT rejected – retrying with fresh cookie');
    chrome.storage?.local.remove('clerkToken');
    const fresh = await getClerkToken();
    if (!fresh) return res;
    res = await doFetch(fresh);
  }
  return res;
}

export default function TwitterReplyGenerator() {
  const [loading, setLoading] = useState(false);
  const [replyOptionsData, setReplyOptionsData] = useState(null);

  // Fetch logged-in user ID (support both login and manual username)
  const getUserId = () => {
    return new Promise(resolve => {
      chrome.storage.local.get(['twitterUser'], res => {
        // Use username if present, else uid
        const user = res.twitterUser;
        if (user) {
          resolve(user.uid || user.username || null);
        } else {
          resolve(null);
        }
      });
    });
  };

  // Get tweet text + author handle (if available)
  const getTweetInfo = (btnEvent) => {
    // 1. If in a reply modal, get the tweet text from the modal
    const modal = document.querySelector("div[role='dialog']");
    if (modal) {
      const tweet = modal.querySelector("article");
      if (tweet) {
        const textEl = tweet.querySelector("div[lang]") || tweet.querySelector("div[data-testid='tweetText']");
        const text = textEl ? textEl.innerText : '';
        // find span that starts with @
        let handle = null;
        tweet.querySelectorAll('span').forEach(s => { if (s.textContent.startsWith('@')) handle = s.textContent; });
        return { text, handle };
      }
    }
    // 2. If inline, find the closest tweet article to the clicked button
    if (btnEvent && btnEvent.target) {
      let el = btnEvent.target;
      while (el && el.nodeType === 1 && !el.closest('[data-testid="tweet"]')) {
        el = el.parentElement;
      }
      const tweet = el ? el.closest('article') : null;
      if (tweet) {
        const textEl = tweet.querySelector("div[lang]") || tweet.querySelector("div[data-testid='tweetText']");
        const text = textEl ? textEl.innerText : '';
        let handle = null;
        tweet.querySelectorAll('span').forEach(s => { if (s.textContent.startsWith('@')) handle = s.textContent; });
        return { text, handle };
      }
    }
    // 3. Fallback: first tweet on page
    const fallbackEl = document.querySelector("article div[lang]") || document.querySelector("div[data-testid='tweetText']");
    const text = fallbackEl ? fallbackEl.innerText : '';
    let handle = null;
    document.querySelectorAll('article span').forEach(s => { if (s.textContent.startsWith('@')) handle = s.textContent; });
    return { text, handle };
  };

  // Insert generated reply
  const insertReply = (reply) => {
    const modal = document.querySelector("div[role='dialog']");
    if (!modal) return alert(`Reply modal not found. Paste manually: ${reply}`);
    const textarea = modal.querySelector("div[data-testid='tweetTextarea_0']");
    if (textarea) {
      textarea.focus();
      document.execCommand('insertText', false, reply);
    }
  };

  // Call backend
  const generateReply = (btnEvent) => {
    try {
      if (!window.chrome || !chrome.storage || !chrome.storage.local) {
        alert('Extension context invalidated. Please reload the page and try again.');
        return;
      }
      chrome.storage.local.get(['twitterUser', 'toneReady'], async function(res) {
        if (!res || typeof res !== 'object') {
          alert('Extension context invalidated. Please reload the page and try again.');
          return;
        }
        let user, userId, toneReady;
        try {
          user = res.twitterUser;
          userId = user ? (user.uid || user.username) : null;
          toneReady = !!res.toneReady;
        } catch (e) {
          alert('Extension context invalidated. Please reload the page and try again.');
          return;
        }
        const { text: tweetText, handle } = getTweetInfo(btnEvent);
        console.log('[AI Reply] Fetched tweet text:', tweetText, 'handle:', handle);
        if (!userId) return alert('Please log in or enter a username first');
        if (!toneReady) return alert("Your profile is still being analyzed – please try again in a minute.");
        if (!tweetText) return alert('Cannot detect tweet text');
        setLoading(true);
        try {
          const payloadBody = { tweet_text: handle ? `${handle} | ${tweetText}` : tweetText };
          const replyRes = await fetchWithFreshToken(`${BACKEND_URL}/generate_reply`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payloadBody)
          });

          if (!replyRes.ok) throw new Error(await replyRes.text());

          const { reply } = await replyRes.json();
          insertReply(reply);

          await fetchWithFreshToken(`${BACKEND_URL}/users/me/history`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tweet: tweetText, reply })
          });

          // Update local cache for popup RecentRepliesCard
          chrome.storage.local.get('recentHistory', ({ recentHistory }) => {
            const updated = [...(recentHistory || []), { tweet: tweetText, reply }].slice(-20);
            chrome.storage.local.set({ recentHistory: updated });
          });
        } catch (err) {
          console.error(err);
          alert(`Error: ${err.message}`);
        } finally {
          setLoading(false);
        }
      });
    } catch (e) {
      alert('Extension context invalidated. Please reload the page and try again.');
    }
  };

  // Unified injection for modal + inline tweets
  function injectButtons() {
    // Inline tweet toolbars
    document.querySelectorAll('[data-testid="tweet"] [role="group"]').forEach(toolbar => {
      if (toolbar.querySelector('.our-ai-button')) return;
      const btn = document.createElement('div');
      btn.className = 'our-ai-button';
      btn.title = 'AI Reply';
      btn.style.cssText = `
        display: flex;
        align-items: center;
        cursor: pointer;
        margin: 0 8px;
        padding: 6px;
        border-radius: 50%;
        background: rgba(124, 58, 237, 0.1);
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      `;
      btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 20h4l10-12-4-4L4 16v4zm0 0l4-4m0 0l8-8" stroke="#7C3AED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="19" cy="5" r="2" fill="#7C3AED"/>
      </svg>`;
      btn.onmouseover = () => {
        btn.style.background = 'rgba(124, 58, 237, 0.2)';
        btn.style.transform = 'scale(1.1)';
      };
      btn.onmouseout = () => {
        btn.style.background = 'rgba(124, 58, 237, 0.1)';
        btn.style.transform = 'scale(1)';
      };
      btn.onclick = e => { e.stopPropagation(); generateReply(e); };
      toolbar.appendChild(btn);
    });

    // Reply modal toolbar
    document.querySelectorAll("div[role='dialog'] div[data-testid='toolBar']").forEach(toolbar => {
      if (toolbar.querySelector('.our-ai-modal-button')) return;
      const btn = document.createElement('div');
      btn.className = 'our-ai-modal-button';
      btn.title = 'AI Reply';
      btn.style.cssText = `
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #7C3AED;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(124, 58, 237, 0.15);
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(4px);
      `;
      btn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 20h4l10-12-4-4L4 16v4zm0 0l4-4m0 0l8-8" stroke="#7C3AED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="19" cy="5" r="2" fill="#7C3AED"/>
      </svg>`;
      btn.onmouseover = () => {
        btn.style.background = 'rgba(124, 58, 237, 0.1)';
        btn.style.transform = 'scale(1.1)';
        btn.style.boxShadow = '0 4px 12px rgba(124, 58, 237, 0.2)';
      };
      btn.onmouseout = () => {
        btn.style.background = 'rgba(255, 255, 255, 0.9)';
        btn.style.transform = 'scale(1)';
        btn.style.boxShadow = '0 2px 8px rgba(124, 58, 237, 0.15)';
      };
      btn.onclick = e => { e.stopPropagation(); generateReply(e); };
      toolbar.insertBefore(btn, toolbar.firstChild);
    });
  }

  useEffect(() => {
    injectButtons();
    const obs = new MutationObserver(injectButtons);
    obs.observe(document.body, { childList: true, subtree: true });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {loading && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000,
          animation: 'fadeIn 0.2s ease'
        }}>
          <div style={{
            background: 'white',
            padding: '1.5rem',
            borderRadius: '1rem',
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            maxWidth: '90%',
            width: '320px'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              border: '3px solid #7C3AED',
              borderTopColor: 'transparent',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }} />
            <div style={{
              color: '#1F2937',
              fontSize: '1rem',
              fontWeight: '500',
              textAlign: 'center'
            }}>
              Generating your reply...
            </div>
          </div>
        </div>
      )}
      {replyOptionsData && <ReplyOptionsOverlay replies={replyOptionsData} onSelect={insertReply} onCancel={() => setReplyOptionsData(null)} />}
    </>
  );
}

// Suppress 'Extension context invalidated' errors globally
window.addEventListener('unhandledrejection', function(event) {
  if (event.reason && event.reason.message && event.reason.message.includes('Extension context invalidated')) {
    event.preventDefault();
    alert('Extension context lost. Please reload the page and try again.');
  }
});

// Mount into the page
const container = document.createElement('div');
document.body.appendChild(container);
const root = ReactDOM.createRoot(container);
root.render(<TwitterReplyGenerator />);

// Add keyframes at the end of the file
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);
