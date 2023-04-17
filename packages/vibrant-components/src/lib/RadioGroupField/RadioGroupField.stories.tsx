import { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { GhostButton } from '../GhostButton';
import { Radio } from '../Radio/Radio';
import { VStack } from '../VStack';
import { RadioGroupField } from './RadioGroupField';

export default {
  title: 'RadioGroupField',
  component: RadioGroupField,
  args: {
    name: 'RadioGroup',
  },
} as ComponentMeta<typeof RadioGroupField>;

export const Basic: ComponentStory<typeof RadioGroupField> = props => (
  <RadioGroupField {...props}>
    <VStack spacing={8}>
      <Radio value="1" label="First" />
      <Radio value="2" label="Second" />
      <Radio value="3" label="Third" />
    </VStack>
  </RadioGroupField>
);

export const Controlled: ComponentStory<typeof RadioGroupField> = () => {
  const [value, setValue] = useState<string>();

  return (
    <VStack spacing={10}>
      <RadioGroupField name="controlled" onChange={setValue} value={value}>
        <VStack spacing={8}>
          <Radio value="1" label="First" />
          <Radio value="2" label="Second" />
          <Radio value="3" label="Third" />
        </VStack>
      </RadioGroupField>
      <GhostButton size="md" onClick={() => setValue('')}>
        초기화
      </GhostButton>
    </VStack>
  );
};
