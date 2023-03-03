import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '../Box';
import { Text } from '../Text';
import { TabViewItem } from './TabViewItem';

export default {
  title: 'TabViewItem',
  component: TabViewItem,
  args: {
    isSelected: true,
    renderContent: () => (
      <Box backgroundColor="primary" width="100%" height="100%" alignItems="center" justifyContent="center">
        <Text>TabViewItem</Text>
      </Box>
    ),
  },
} as ComponentMeta<typeof TabViewItem>;

export const Basic: ComponentStory<typeof TabViewItem> = props => <TabViewItem {...props} />;
