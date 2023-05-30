import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { DrawerPanel } from './DrawerPanel';

export default {
  title: 'DrawerPanel',
  component: DrawerPanel,
  args: {},
} as ComponentMeta<typeof DrawerPanel>;

export const Basic: ComponentStory<typeof DrawerPanel> = props => <DrawerPanel {...props} />;
