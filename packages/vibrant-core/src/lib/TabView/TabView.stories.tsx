import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '../Box';
import { PressableBox } from '../PressableBox';
import { TabViewItem } from '../TabViewItem';
import { Text } from '../Text';
import { TabView } from './TabView';

export default {
  title: 'TabView',
  component: TabView,
  args: {
    renderTobBarContainer: children => (
      <Box flex={1} flexDirection="row" columnGap={20}>
        {children}
      </Box>
    ),
    renderTobBarItem: ({ title, isSelected, onClick }) => (
      <PressableBox width={120} onClick={onClick} flex={1} flexDirection="row" columnGap={2} alignItems="center">
        <Text>{title}</Text>
        {isSelected && <Box borderRadius={5} width={10} height={10} backgroundColor="error" />}
      </PressableBox>
    ),
  },
} as ComponentMeta<typeof TabView>;

export const Basic: ComponentStory<typeof TabView> = props => (
  <TabView {...props}>
    <TabViewItem
      title="First"
      tabId="first"
      renderContent={() => <Box backgroundColor="primary" width="100%" height={200} />}
    />
    <TabViewItem
      title="Second"
      tabId="second"
      renderContent={() => <Box backgroundColor="informative" width="100%" height={200} />}
    />
  </TabView>
);
