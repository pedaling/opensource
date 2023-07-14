import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '@vibrant-ui/icons';
import { HStack } from '../HStack';
import { Title } from '../Title';
import { VStack } from '../VStack';
import { TopBar } from './TopBar';

export default {
  title: 'TopBar',
  component: TopBar,
  args: {
    renderLeft: () => [<Icon.Bell.Regular key={1} size={24} />, <Icon.Gear.Regular key={2} size={24} />],
    renderRight: () => [<Icon.Bell.Regular key={1} size={24} />, <Icon.Gear.Regular key={2} size={24} />],
    title: 'Title',
    as: 'header',
  },
} as ComponentMeta<typeof TopBar>;

export const Regular: ComponentStory<typeof TopBar> = ({ kind: _, ...props }) => (
  <VStack width="100%">
    <TopBar {...props} renderLeft={() => [<Icon.ChevronLeft.Regular key={1} size={24} />]} />
  </VStack>
);

export const Emphasis: ComponentStory<typeof TopBar> = ({ renderLeft: _, ...props }) => (
  <VStack width="100%">
    <TopBar {...props} kind="emphasis" />
  </VStack>
);

export const TitleReactElement: ComponentStory<typeof TopBar> = ({ renderLeft: _, ...props }) => (
  <VStack width="100%">
    <TopBar
      {...props}
      title={
        <HStack width="100%" alignHorizontal="center" alignVertical="center" spacing={10}>
          <Title level={4} color="onView1">
            TEXT
          </Title>
          <Title level={4} color="error">
            TEXT2
          </Title>
        </HStack>
      }
    />
  </VStack>
);
