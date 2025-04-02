import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Log a message so we know this file is executed.
console.log("Popup entry loaded");

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("No element with id 'root' found in popup.html");
}
