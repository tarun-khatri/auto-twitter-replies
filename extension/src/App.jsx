import React from 'react';
import TwitterLogin from './TwitterLogin';

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h2>Twitter Auto Reply</h2>
      <TwitterLogin onLogin={(user) => console.log('Logged in:', user)} />
      <p>Once you log in, we’ll personalize replies based on your tone.</p>
    </div>
  );
}
