import React, { useState } from 'react';
import { Card, Title, Select, Slider, Text, Group } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';

export default function SettingsCard() {
  const [tone, setTone] = useState('Witty');
  const [length, setLength] = useState(50);
  const [creative, setCreative] = useState(60);

  return (
    <Card className="verve-card" radius="md">
      <Group position="apart" mb={12}>
        <Title order={2} className="h-title">Analysis Settings</Title>
        <IconSettings size={24} color="url(#accent)" />
      </Group>
      <Select
        label={<Text size="sm" color="#A0A4B8">Tone Preset</Text>}
        data={[
          { value: 'Witty', label: 'Witty' },
          { value: 'Professional', label: 'Professional' },
          { value: 'Casual', label: 'Casual' },
          { value: 'Custom', label: 'Custom' },
        ]}
        value={tone}
        onChange={setTone}
        className="verve-input"
        withinPortal
        mb={16}
      />
      <Text size="sm" color="#A0A4B8" mb={4}>Reply Length</Text>
      <Slider value={length} onChange={setLength} color="violet" mb={16} />
      <Text size="sm" color="#A0A4B8" mb={4}>Creative Dial</Text>
      <Slider value={creative} onChange={setCreative} color="violet" />
    </Card>
  );
} 