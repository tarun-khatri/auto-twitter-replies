import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import ReplyOptionsOverlay from "./ReplyOptionsOverlay";
import { FaMagic } from "react-icons/fa";

const BACKEND_URL = "http://localhost:8000";

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

  // Get tweet text from the correct context
  const getOriginalTweetText = (btnEvent) => {
    // 1. If in a reply modal, get the tweet text from the modal
    const modal = document.querySelector("div[role='dialog']");
    if (modal) {
      // Twitter/X modal: the tweet being replied to is usually the first article in the modal
      const tweet = modal.querySelector("article");
      if (tweet) {
        const textEl = tweet.querySelector("div[lang]") || tweet.querySelector("div[data-testid='tweetText']");
        if (textEl) return textEl.innerText;
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
        if (textEl) return textEl.innerText;
      }
    }
    // 3. Fallback: first tweet on page
    const fallback = document.querySelector("article div[lang]") || document.querySelector("div[data-testid='tweetText']");
    return fallback ? fallback.innerText : '';
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
      chrome.storage.local.get(['twitterUser', 'toneReady'], function(res) {
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
        const tweetText = getOriginalTweetText(btnEvent);
        console.log('[AI Reply] Fetched tweet text:', tweetText);
        if (!userId) return alert('Please log in or enter a username first');
        if (!toneReady) return alert("Your profile is still being analyzed – please try again in a minute.");
        if (!tweetText) return alert('Cannot detect tweet text');
        setLoading(true);
        fetch(`${BACKEND_URL}/generate_reply`, {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ user_id: userId, tweet_text: tweetText })
        })
          .then(res => {
            if (!res.ok) return res.text().then(t => { throw new Error(t); });
            return res.json();
          })
          .then(({ reply }) => {
            insertReply(reply);
            // Save to history
            return fetch(`${BACKEND_URL}/users/${userId}/history`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ tweet: tweetText, reply })
            });
          })
          .catch(err => {
            console.error(err);
            alert(`Error: ${err.message}`);
          })
          .finally(() => setLoading(false));
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
      btn.style.cssText = 'display:flex;align-items:center;cursor:pointer;margin:0 8px;';
      btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 20h4l10-12-4-4L4 16v4zm0 0l4-4m0 0l8-8" stroke="#9333EA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="19" cy="5" r="2" fill="#9333EA"/></svg>`;
      btn.onclick = e => { e.stopPropagation(); generateReply(e); };
      toolbar.appendChild(btn);
    });

    // Reply modal toolbar
    document.querySelectorAll("div[role='dialog'] div[data-testid='toolBar']").forEach(toolbar => {
      if (toolbar.querySelector('.our-ai-modal-button')) return;
      const btn = document.createElement('div');
      btn.className = 'our-ai-modal-button';
      btn.title = 'AI Reply';
      btn.style.cssText = 'width:36px;height:36px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#9333EA;background:rgba(255,255,255,0.9);border-radius:50%;box-shadow:0 2px 8px rgba(147,51,234,0.08);transition:background 0.2s;';
      btn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 20h4l10-12-4-4L4 16v4zm0 0l4-4m0 0l8-8" stroke="#9333EA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="19" cy="5" r="2" fill="#9333EA"/></svg>`;
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
    replyOptionsData && <ReplyOptionsOverlay replies={replyOptionsData} onSelect={insertReply} onCancel={() => setReplyOptionsData(null)} />
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
