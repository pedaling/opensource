import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Body } from '../Body';
import { HStack } from '../HStack';
import { Paper } from '../Paper';
import { ViewPagerTabGroupItem } from '../ViewPagerTabGroupItem';
import { VStack } from '../VStack';
import { ViewPagerTabGroup } from './ViewPagerTabGroup';

export default {
  title: 'ViewPagerTabGroup',
  component: ViewPagerTabGroup,
  args: {
    tabSpacing: 40,
  },
} as ComponentMeta<typeof ViewPagerTabGroup>;

export const Basic: ComponentStory<typeof ViewPagerTabGroup> = props => (
  <VStack width="100%" height="100%">
    <ViewPagerTabGroup {...props}>
      <ViewPagerTabGroupItem
        tabId="first"
        title="First Tab"
        renderContent={() => (
          <HStack width="100%" height="100%">
            <Paper backgroundColor="informative" width="100%">
              <Body level={2}>First Page</Body>
            </Paper>
          </HStack>
        )}
      />

      <ViewPagerTabGroupItem
        tabId="second"
        title="Second Tab"
        renderContent={() => (
          <HStack width="100%" height="100%">
            <Paper backgroundColor="warning" width="100%">
              <Body level={2}>Second Page</Body>
            </Paper>
          </HStack>
        )}
      />
    </ViewPagerTabGroup>
  </VStack>
);
