import { Card, Title, Text, Group, Badge } from '@mantine/core';

export default function SummaryCard({ profile }) {
  const { tone_summary = '', tweet_count = 0, last_scraped_at = '', handle = '' } = profile;
  return (
    <Card className="verve-card" radius="md" mt={16}>
      <Group position="apart" mb={8}>
        <Title order={3} className="h-title">@{handle || 'username'}</Title>
        <Badge color="violet" variant="filled">{tweet_count} Tweets Analysed</Badge>
      </Group>
      <Text size="xs" color="dimmed" mb={4}>Profile Summary</Text>
      <Text size="sm" style={{ whiteSpace:'pre-wrap', lineHeight:1.4 }}>{tone_summary || 'Analysis pending…'}</Text>
      {last_scraped_at && <Text size="xs" color="dimmed" mt={6}>Last updated: {new Date(last_scraped_at).toLocaleDateString()}</Text>}
    </Card>
  );
} 