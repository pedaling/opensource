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

export const ViewPagerTabGroup = withViewPagerTabGroupVariation(({ children, testId, onTabChange, tabSpacing }) => (
  <TabView
    testId={testId}
    renderTobBarContainer={props => (
      <HStack px={[20, 20, 0]} spacing={tabSpacing} data-testid="top-bar-container">
        {props}
      </HStack>
    )}
    renderTobBarItem={({ isSelected, onClick, title, tabId }) => (
      <VStack key={title} spacing={8}>
        <Pressable onClick={onClick} data-testid={`top-bar-${tabId}`}>
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
