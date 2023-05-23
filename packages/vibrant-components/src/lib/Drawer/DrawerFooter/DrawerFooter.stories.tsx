import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { DrawerFooter } from './DrawerFooter';

export default {
  title: 'DrawerFooter',
  component: DrawerFooter,
  args: {},
} as ComponentMeta<typeof DrawerFooter>;

export const Basic: ComponentStory<typeof DrawerFooter> = props => <DrawerFooter {...props} />;
