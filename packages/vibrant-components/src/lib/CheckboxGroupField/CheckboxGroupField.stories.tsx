import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Body } from '../Body';
import { HStack } from '../HStack';
import { CheckboxGroupField } from './CheckboxGroupField';

export default {
  title: 'CheckboxGroupField',
  component: CheckboxGroupField,
  args: {
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana', helperText: 'Popular!' },
      { value: 'orange', label: 'Orange' },
      { value: 'melon', label: 'Melon' },
      { value: 'peach', label: 'Peach' },
    ],
    renderItem: ({ checkboxFieldElement, isChecked }) => (
      <HStack alignment="space-between" alignItems="center" width={100}>
        {checkboxFieldElement}
        {isChecked && <Body level={4}>✓</Body>}
      </HStack>
    ),
  },
} as ComponentMeta<typeof CheckboxGroupField>;

export const Basic: ComponentStory<typeof CheckboxGroupField> = props => <CheckboxGroupField {...props} />;
