import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Paragraph } from './Paragraph';

export default {
  title: 'Paragraph',
  component: Paragraph,
  args: {
    level: 1,
    children: 'Sample Text',
  },
} as ComponentMeta<typeof Paragraph>;

export const Basic: ComponentStory<typeof Paragraph> = ({ children, ...restProps }) => (
  <Paragraph {...restProps}>{children}</Paragraph>
);
