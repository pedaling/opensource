import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Body } from '../Body';
import { CheckboxGroupField } from './CheckboxGroupField';

export default {
  title: 'CheckboxGroupField',
  component: CheckboxGroupField,
  args: {
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana', helperText: 'Popular!' },
      {
        value: 'orange',
        label: 'Orange',
        renderFooter: ({ checked }) =>
          checked && (
            <Body level={2} color="primary">
              It's footer!
            </Body>
          ),
      },
      { value: 'melon', label: 'Melon' },
      { value: 'peach', label: 'Peach' },
    ],
  },
} as ComponentMeta<typeof CheckboxGroupField>;

export const Basic: ComponentStory<typeof CheckboxGroupField> = props => <CheckboxGroupField {...props} />;
