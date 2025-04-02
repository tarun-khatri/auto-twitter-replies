import React, { useState, useEffect } from 'react';

function App() {
  const [replyOptions, setReplyOptions] = useState(1);

  // Load saved settings from chrome.storage.local.
  useEffect(() => {
    if (chrome && chrome.storage && chrome.storage.local) {
      chrome.storage.local.get(['replyOptions'], (result) => {
        if (result.replyOptions) {
          setReplyOptions(result.replyOptions);
        }
      });
    }
  }, []);

  const handleSave = () => {
    if (chrome && chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ replyOptions }, () => {
        alert('Settings saved!');
      });
    } else {
      alert('chrome.storage is not available.');
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h3>Twitter Auto Reply Settings</h3>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="replyOptions">Number of Reply Options:</label>
        <input
          id="replyOptions"
          type="number"
          min="1"
          value={replyOptions}
          onChange={(e) => setReplyOptions(Number(e.target.value))}
          style={{ marginLeft: "10px", width: "60px" }}
        />
      </div>
      <button 
        onClick={handleSave} 
        style={{
          padding: "6px 12px", 
          border: "none", 
          backgroundColor: "#1da1f2", 
          color: "#fff", 
          borderRadius: "4px", 
          cursor: "pointer"
        }}
      >
        Save Settings
      </button>
    </div>
  );
}

export default App;
