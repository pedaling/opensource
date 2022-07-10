import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Divider } from './Divider';

export default {
  title: 'Divider',
  component: Divider,
  args: {
    direction: 'horizontal',
    margin: 'md',
    thickness: 1,
  },
} as ComponentMeta<typeof Divider>;

export const Basic: ComponentStory<typeof Divider> = props => <Divider {...props} />;
