import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Your custom styling

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
