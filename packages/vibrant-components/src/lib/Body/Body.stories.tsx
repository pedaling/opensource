import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Body } from './Body';

export default {
  title: 'Body',
  component: Body,
  args: {
    level: 1,
    children: 'Sample Text',
  },
} as ComponentMeta<typeof Body>;

export const Basic: ComponentStory<typeof Body> = props => <Body {...props} />;
