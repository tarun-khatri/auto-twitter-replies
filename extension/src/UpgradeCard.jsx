import { Card, Title, List, ThemeIcon, Button } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

const MAIN_SITE_URL = import.meta.env.VITE_MAIN_SITE_URL || 'https://getverve.xyz';

export default function UpgradeCard() {
  const features = [
    'Unlimited personalized replies',
    'Advanced tone analysis',
    'Image context analysis',
    'Account mimicking',
    'Priority support',
  ];
  const openUpgrade = () => {
    if (chrome?.tabs) chrome.tabs.create({ url: `${MAIN_SITE_URL}/pricing` });
    else window.open(`${MAIN_SITE_URL}/pricing`, '_blank');
  };
  return (
    <Card className="verve-card" radius="md" mt={16}>
      <Title order={2} className="h-title" mb={12}>Upgrade to Verve Pro</Title>
      <List spacing="xs" size="sm" mb={12} icon={<ThemeIcon color="violet" size={18}><IconCheck size={14} /></ThemeIcon>}>
        {features.map(f => <List.Item key={f}>{f}</List.Item>)}
      </List>
      <Button fullWidth variant="gradient" gradient={{ from: 'violet', to: 'indigo', deg: 45 }} onClick={openUpgrade}>
        Upgrade Now
      </Button>
    </Card>
  );
} 