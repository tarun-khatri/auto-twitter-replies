// verve/src/pages/X-login.tsx
import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signOut,
  signInWithPopup,
  TwitterAuthProvider,
  getAdditionalUserInfo
} from 'firebase/auth';

export default function XLogin() {
  const [status, setStatus] = useState('Please click Login below');
  const [error, setError] = useState('');
  const [isReady, setIsReady] = useState(false);
  
  useEffect(() => {
    try {
      // Initialize once
      const firebaseConfig = {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_FIREBASE_APP_ID
      };
      
      console.log('Firebase config:', firebaseConfig);
      
      if (!firebaseConfig.apiKey) {
        setError('Firebase API key not found. Please check environment variables.');
        return;
      }
      
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
      const provider = new TwitterAuthProvider();
      provider.setCustomParameters({
        include_email: 'true',
        force_login: 'true'     
      });
      
      setIsReady(true);
      setStatus('Ready to login');
    } catch (err) {
      console.error('Firebase initialization error:', err);
      setError('Failed to initialize Firebase: ' + (err instanceof Error ? err.message : String(err)));
    }
  }, []);

  const handleLogin = () => {
    if (!isReady) {
      setError('Firebase not ready yet');
      return;
    }
    
    setStatus('Opening Twitter popup…');
    setError('');
    
    try {
      const auth = getAuth();
      const provider = new TwitterAuthProvider();
      provider.setCustomParameters({
        include_email: 'true',
        force_login: 'true'     
      });
      
      signOut(auth).catch(() => {/* ignore if not signed in */});
      signInWithPopup(auth, provider)
        .then(result => {
          const user = result.user;
          // Grab the Twitter handle from the additionalUserInfo
          const info = getAdditionalUserInfo(result);
          const username = info?.username || '';

          setStatus('Login successful! Closing…');

          // send to extension, now including username
          window.opener.postMessage(
            { type: 'AUTH_SUCCESS', user: {
                uid: user.uid,
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                username
              } 
            },
            '*'
          );
          setTimeout(() => window.close(), 1000);
        })
        .catch(err => {
          console.error('Login failed', err);
          setError('Login failed: ' + err.message);
        });
    } catch (err) {
      console.error('Login error:', err);
      setError('Login error: ' + (err instanceof Error ? err.message : String(err)));
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h3>Twitter OAuth</h3>
      {error && (
        <div style={{ color: 'red', marginBottom: 10 }}>
          Error: {error}
        </div>
      )}
      <button 
        onClick={handleLogin}
        disabled={!isReady}
        style={{
          padding: '10px 20px',
          backgroundColor: '#1DA1F2',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: isReady ? 'pointer' : 'not-allowed',
          opacity: isReady ? 1 : 0.5
        }}
      >
        Login with Twitter
      </button>
      <p>{status}</p>
    </div>
  );
} 