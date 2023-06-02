import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { DrawerHeader } from './DrawerHeader';

export default {
  title: 'DrawerHeader',
  component: DrawerHeader,
  args: {},
} as ComponentMeta<typeof DrawerHeader>;

export const Basic: ComponentStory<typeof DrawerHeader> = props => <DrawerHeader {...props} />;
