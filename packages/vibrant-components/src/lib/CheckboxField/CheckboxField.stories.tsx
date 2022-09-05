import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { CheckboxField } from './CheckboxField';

export default {
  title: 'CheckboxField',
  component: CheckboxField,
  args: {
    size: 'md',
    label: '텍스트',
  },
} as ComponentMeta<typeof CheckboxField>;

export const Basic: ComponentStory<typeof CheckboxField> = props => <CheckboxField {...props} />;
