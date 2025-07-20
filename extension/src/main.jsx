import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MantineProvider } from '@mantine/core';
import './theme.css';
// Removed global index.css import to avoid overriding Mantine styles

function Main() {
  const colorScheme = 'dark';

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme,
        fontFamily: 'Inter, sans-serif',
        headings: { fontFamily: 'Playfair Display, serif', sizes: { h2: { fontSize: 24, fontWeight: 700 } } },
        defaultRadius: 'md',
        primaryColor: 'violet',
      }}
    >
      <App />
    </MantineProvider>
  );
}

// Ensure we're in a browser environment
if (typeof window !== 'undefined') {
  const root = document.getElementById('root');
  if (root) {
    ReactDOM.render(<Main />, root);
  }
}
