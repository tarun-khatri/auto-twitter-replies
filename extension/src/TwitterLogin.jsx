import React, { useState, useEffect } from "react";
import { loginWithTwitter, logout } from "./firebase";

const TwitterLogin = ({ onLogin }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const userData = await loginWithTwitter();
      setUser(userData);
      onLogin && onLogin(userData);
      localStorage.setItem("twitterUser", JSON.stringify(userData));
      setError(null);
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      localStorage.removeItem("twitterUser");
    } catch (err) {
      setError("Logout failed. Please try again.");
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem("twitterUser");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}!</p>
          <button onClick={handleLogout} style={buttonStyle}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <p>Please log in with Twitter</p>
          <button onClick={handleLogin} style={buttonStyle}>
            Login with Twitter
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      )}
    </div>
  );
};

const buttonStyle = {
  padding: "10px 16px",
  fontSize: "14px",
  border: "none",
  borderRadius: "4px",
  background: "#1da1f2",
  color: "#fff",
  cursor: "pointer",
};

export default TwitterLogin;
