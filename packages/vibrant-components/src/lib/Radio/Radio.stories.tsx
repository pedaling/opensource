import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { RadioGroupField } from '../RadioGroupField/RadioGroupField';
import { Radio } from './Radio';

export default {
  title: 'Radio',
  component: Radio,
  args: {
    label: 'Radio',
    description: 'Description',
    value: '1',
  },
} as ComponentMeta<typeof Radio>;

export const Basic: ComponentStory<typeof Radio> = props => (
  <RadioGroupField name="radioGroup">
    <Radio {...props} />
    <Radio value="2" />
    <Radio value="3" />
  </RadioGroupField>
);
