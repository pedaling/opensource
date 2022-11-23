import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '@vibrant-ui/icons';
import { VStack } from '../VStack';
import { TopBar } from './TopBar';

export default {
  title: 'TopBar',
  component: TopBar,
  args: {
    renderRight: () => [<Icon.Bell.Regular key={1} size={24} />, <Icon.Gear.Regular key={1} size={24} />],
    renderLeft: () => [<Icon.ChevronLeft.Regular key={1} size={24} />],
  },
} as ComponentMeta<typeof TopBar>;

export const Basic: ComponentStory<typeof TopBar> = props => (
  <VStack width="100%">
    <TopBar {...props} />
  </VStack>
);
