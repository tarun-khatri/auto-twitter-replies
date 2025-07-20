import React from 'react';
import { Card, Title, Textarea, Divider } from '@mantine/core';

export default function PreviewCard({ reply, history = [] }) {
  return (
    <Card className="verve-card" radius="md">
      <Title order={2} className="h-title" mb={12}>Live Response Preview</Title>
      {reply ? (
        <Textarea
          value={reply}
          readOnly
          autosize
          minRows={4}
          className="verve-input"
          style={{ background: 'transparent', resize: 'none' }}
        />
      ) : (
        <Textarea
          value="Generate a reply to see preview"
          readOnly
          autosize
          minRows={3}
          className="verve-input"
          style={{ background: 'transparent', resize: 'none', fontStyle: 'italic', color: '#9CA3AF' }}
        />
      )}
      {/* Recent replies (last 3) */}
      {history?.length ? (
        <>
          <Divider my={12} />
          <Title order={6} style={{ fontWeight: 600, fontSize: 14, marginBottom: 8 }}>
            Recent AI Replies
          </Title>
          {history.slice(-3).reverse().map((h, idx) => (
            <div key={idx} style={{ marginBottom: 8 }}>
              <div style={{ fontSize: 12, color: '#6B7280', whiteSpace: 'pre-wrap' }}>{h.tweet}</div>
              <div style={{ fontSize: 12 }}>{h.reply}</div>
              {idx < 2 && <Divider my={6} />}
            </div>
          ))}
        </>
      ) : null}
      {/* no buttons */}
    </Card>
  );
} 