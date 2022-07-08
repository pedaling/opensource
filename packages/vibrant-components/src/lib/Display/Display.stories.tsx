import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Display } from './Display';

export default {
  title: 'Display',
  component: Display,
  args: {
    level: 1,
    children: 'Sample Text',
  },
} as ComponentMeta<typeof Display>;

export const Basic: ComponentStory<typeof Display> = ({ children, ...restProps }) => (
  <Display {...restProps}>{children}</Display>
);
