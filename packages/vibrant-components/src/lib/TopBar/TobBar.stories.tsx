import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '@vibrant-ui/icons';
import { VStack } from '../VStack';
import { TopBar } from './TopBar';

export default {
  title: 'TopBar',
  component: TopBar,
  args: {
    renderRight: () => [<Icon.Bell.Regular key={1} size={24} />, <Icon.Gear.Regular key={2} size={24} />],
    title: 'Title',
  },
} as ComponentMeta<typeof TopBar>;

export const Regular: ComponentStory<typeof TopBar> = props => (
  <VStack width="100%">
    <TopBar {...props} renderLeft={() => [<Icon.ChevronLeft.Regular key={1} size={24} />]} kind="regular" />
  </VStack>
);

export const Emphasis: ComponentStory<typeof TopBar> = ({ renderLeft: _, ...props }) => (
  <VStack width="100%">
    <TopBar {...props} kind="emphasis" />
  </VStack>
);
