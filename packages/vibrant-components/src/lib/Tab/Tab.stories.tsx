import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { VStack } from '../VStack';
import { Tab } from './Tab';

export default {
  title: 'Tab',
  component: Tab,
  args: {
    title: 'Tab',
    active: true,
    update: true,
    id: 'tab1',
  },
} as ComponentMeta<typeof Tab>;

export const Basic: ComponentStory<typeof Tab> = props => (
  <VStack>
    <Tab {...props} />
  </VStack>
);
