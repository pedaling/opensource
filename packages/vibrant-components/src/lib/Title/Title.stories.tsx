import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Title } from './Title';

export default {
  title: 'Title',
  component: Title,
  args: {
    level: 1,
    children: 'Sample Text',
  },
} as ComponentMeta<typeof Title>;

export const Basic: ComponentStory<typeof Title> = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);
