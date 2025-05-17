// landing/src/App.jsx
import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signOut,
  signInWithPopup,
  TwitterAuthProvider,
 getAdditionalUserInfo
} from 'firebase/auth';

export default function App() {
  const [status, setStatus] = useState('Please click Login below');
  
  // Initialize once
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new TwitterAuthProvider();
  provider.setCustomParameters({
       include_email: 'true',
        force_login:  'true'     
      });

  const handleLogin = () => {
    setStatus('Opening Twitter popup…');
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
        setStatus('Login failed: ' + err.message);
      });
  };

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h3>Twitter OAuth</h3>
      <button onClick={handleLogin}>Login with Twitter</button>
      <p>{status}</p>
    </div>
  );
}
