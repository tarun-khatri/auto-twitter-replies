import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import ReplyOptionsOverlay from "./ReplyOptionsOverlay";

const BACKEND_URL = "http://localhost:8000"; // Update if needed

function TwitterReplyGenerator() {
  const [loading, setLoading] = useState(false);
  const [replyOptionsData, setReplyOptionsData] = useState(null);

  const getOriginalTweetText = () => {
    let tweetElement = document.querySelector("article div[lang]");
    if (!tweetElement) {
      tweetElement = document.querySelector("div[data-testid='tweetText']");
    }
    return tweetElement ? tweetElement.innerText : "";
  };

  const generateReplyOptions = async () => {
    let replyOptions = 1;
    if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
      await new Promise((resolve) => {
        chrome.storage.local.get(["replyOptions"], (result) => {
          if (result && result.replyOptions) {
            replyOptions = result.replyOptions;
          }
          resolve();
        });
      });
    }
    const tweetText = getOriginalTweetText();
    if (!tweetText) {
      alert("Unable to detect tweet text on the page.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(`${BACKEND_URL}/generate_reply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tweet_text: tweetText, reply_options: replyOptions }),
      });
      const data = await response.json();
      if (data.replies && data.replies.length > 0) {
        setReplyOptionsData(data.replies);
      } else {
        alert("No reply generated.");
      }
    } catch (error) {
      console.error("Error generating reply:", error);
      alert("Error generating reply. Check console for details.");
    }
    setLoading(false);
  };

  const removeOverlay = () => {
    setReplyOptionsData(null);
  };

  const insertReply = (reply) => {
    const modal = document.querySelector("div[role='dialog']");
    if (modal) {
      const textArea = modal.querySelector("div[data-testid='tweetTextarea_0']");
      if (textArea) {
        textArea.focus();
        document.execCommand("insertText", false, reply);
      } else {
        alert("Reply box not found in modal. Please paste the reply manually: " + reply);
      }
    } else {
      alert("Reply modal not found. Please paste the reply manually: " + reply);
    }
  };

  const handleOverlaySelect = (reply) => {
    insertReply(reply);
    removeOverlay();
  };

  const injectButton = () => {
    const modal = document.querySelector("div[role='dialog']");
    if (modal) {
      if (modal.querySelector("#generate-reply-button")) return;
      let toolbar = modal.querySelector("div[data-testid='toolBar']");
      if (!toolbar) {
        const italicButton = modal.querySelector("button[aria-label^='Italic']");
        if (italicButton) toolbar = italicButton.parentElement;
      }
      if (toolbar && !toolbar.querySelector("#generate-reply-button")) {
        const btn = document.createElement("button");
        btn.id = "generate-reply-button";
        btn.title = "Auto Reply";
        btn.style.width = "24px";
        btn.style.height = "24px";
        btn.style.border = "none";
        btn.style.background = "transparent";
        btn.style.cursor = "pointer";
        btn.style.marginRight = "4px";
        btn.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" fill="rgb(29,155,240)">
                           <path d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h8.25"/>
                         </svg>`;
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          generateReplyOptions();
        });
        toolbar.insertBefore(btn, toolbar.firstChild);
        console.log("Auto-reply button injected.");
      }
    }
  };

  useEffect(() => {
    injectButton();
    const observer = new MutationObserver(() => {
      requestAnimationFrame(() => {
        injectButton();
      });
    });
    observer.observe(document.body, { childList: true, subtree: true, attributes: true });
    const interval = setInterval(injectButton, 1000);
    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {replyOptionsData && (
        <ReplyOptionsOverlay
          replies={replyOptionsData}
          onSelect={handleOverlaySelect}
          onCancel={removeOverlay}
        />
      )}
    </>
  );
}

const container = document.createElement("div");
document.body.appendChild(container);
const root = ReactDOM.createRoot(container);
root.render(<TwitterReplyGenerator />);
