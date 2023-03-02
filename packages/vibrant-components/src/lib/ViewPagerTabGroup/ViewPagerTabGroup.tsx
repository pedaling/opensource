import { TabView } from '@vibrant-ui/core';
import { HStack } from '../HStack';
import { Paper } from '../Paper';
import { Pressable } from '../Pressable';
import { Title } from '../Title';
import { VStack } from '../VStack';
import { withViewPagerTabGroupVariation } from './ViewPagerTabGroupProps';

export const ViewPagerTabGroup = withViewPagerTabGroupVariation(({ children, onChangeTab, tabSpacing }) => (
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
    onChangeTab={onChangeTab}
  >
    {children}
  </TabView>
));
