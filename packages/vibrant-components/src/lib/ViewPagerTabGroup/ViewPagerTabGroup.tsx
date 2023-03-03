import type { ComponentWithRef } from '@vibrant-ui/core';
import { TabView } from '@vibrant-ui/core';
import { HStack } from '../HStack';
import { Paper } from '../Paper';
import { Pressable } from '../Pressable';
import { Title } from '../Title';
import { VStack } from '../VStack';
import type { ViewPagerTabGroupItemProps } from './ViewPagerTabGroupItem';
import { ViewPagerTabGroupItem } from './ViewPagerTabGroupItem';
import type { ViewPagerTabGroupProps } from './ViewPagerTabGroupProps';
import { withViewPagerTabGroupVariation } from './ViewPagerTabGroupProps';

export const ViewPagerTabGroup = withViewPagerTabGroupVariation(({ children, onTabChange, tabSpacing }) => (
  <TabView
    renderTobBarContainer={props => (
      <HStack px={20} spacing={tabSpacing}>
        {props}
      </HStack>
    )}
    renderTobBarItem={({ isSelected, onClick, title }) => (
      <VStack key={title} spacing={8}>
        <Pressable onClick={onClick}>
          <Title level={5}>{title}</Title>
        </Pressable>
        {isSelected && <Paper borderColor="onView1" borderStyle="solid" borderWidth={1} />}
      </VStack>
    )}
    onTabChange={onTabChange}
  >
    {children}
  </TabView>
)) as ComponentWithRef<ViewPagerTabGroupProps> & {
  Item: ComponentWithRef<ViewPagerTabGroupItemProps>;
};

ViewPagerTabGroup.Item = ViewPagerTabGroupItem;
