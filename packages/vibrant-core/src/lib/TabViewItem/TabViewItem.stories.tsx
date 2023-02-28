import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '../Box';
import { TabViewItem } from './TabViewItem';

export default {
  title: 'TabViewItem',
  component: TabViewItem,
  args: {
    isSelected: true,
    renderContent: () => <Box backgroundColor="primary" width="100%" height={200} />,
  },
} as ComponentMeta<typeof TabViewItem>;

export const Basic: ComponentStory<typeof TabViewItem> = props => <TabViewItem {...props} />;
