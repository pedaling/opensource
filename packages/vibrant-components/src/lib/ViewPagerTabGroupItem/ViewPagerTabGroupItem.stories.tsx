import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Body } from '../Body';
import { Paper } from '../Paper';
import { ViewPagerTabGroupItem } from '../ViewPagerTabGroupItem';

export default {
  title: 'ViewPagerTabGroupItem',
  component: ViewPagerTabGroupItem,
  args: {
    isSelected: true,
    renderContent: () => (
      <Paper backgroundColor="primary" height="100%">
        <Body level={3}>ViewPagerTabItem</Body>
      </Paper>
    ),
  },
} as ComponentMeta<typeof ViewPagerTabGroupItem>;

export const Basic: ComponentStory<typeof ViewPagerTabGroupItem> = props => <ViewPagerTabGroupItem {...props} />;
