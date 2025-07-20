import { Card, Title, Divider } from '@mantine/core';

export default function RecentRepliesCard({ history = [] }) {
  const items = history.slice(-3).reverse();
  return (
    <Card className="verve-card" radius="md" mt={16}>
      <Title order={2} className="h-title" mb={12}>Recent AI Replies</Title>
      {items.map((h, idx) => (
        <div key={idx} style={{ marginBottom: idx === items.length -1 ? 0 : 12 }}>
          <div style={{ fontSize: 12, color: '#6B7280', whiteSpace: 'pre-wrap' }}>{h.tweet}</div>
          <div style={{ fontSize: 13, color:'#F3F4F6' }}>{h.reply}</div>
          {idx !== items.length -1 && <Divider my={8} />}
        </div>
      ))}
    </Card>
  );
} 