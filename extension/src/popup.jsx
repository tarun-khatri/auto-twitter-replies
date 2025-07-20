import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Removed global index.css import to avoid overriding Mantine styles
import { MantineProvider } from "@mantine/core";
import './theme.css'; // global styles

function PopupMain() {
  const colorScheme = 'dark';

  useLayoutEffect(() => {
    // Auto-resize the Chrome popup to fit its content (max 600px height).
    const resize = () => {
      const h = Math.min(document.body.scrollHeight, 600);
      const w = 360; // fixed width
      if (typeof chrome !== 'undefined' && chrome?.windows) {
        window.resizeTo(w, h);
      }
    };
    resize();
    const obs = new MutationObserver(resize);
    obs.observe(document.body, { childList: true, subtree: true, attributes: true });
    return () => obs.disconnect();
  }, []);

  return (
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
          primaryColor: 'violet',
          defaultRadius: 'md',
          fontFamily: 'Inter, sans-serif',
          headings: {
            fontWeight: 700,
            fontFamily: 'Playfair Display, serif',
            sizes: { h2: { fontSize: 24 } },
          },
          components: {
            Card: {
              styles: (theme) => ({
                root: {
                  border: 'none',
                  boxShadow: theme.colorScheme === 'dark'
                    ? '0 0 0 1px rgba(255,255,255,0.1)'
                    : '0 4px 20px rgba(0,0,0,0.06)',
                },
              }),
            },
            Button: {
              defaultProps: {
                radius: 'md',
                size: 'md',
              },
              styles: {
                root: {
                  fontWeight: 600,
                },
              },
            },
            TextInput: {
              defaultProps: {
                radius: 'md',
              },
            },
          },
        }}
      >
        <div style={{ background: 'var(--navy-bg)', padding: 16 }}>
          <App />
        </div>
      </MantineProvider>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <PopupMain />
  </React.StrictMode>
);
