import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { HStack, Paper, Title } from '@vibrant-ui/components';
import { ScrollTabsLayout } from './ScrollTabsLayout';

export default {
  title: 'ScrollTabsLayout',
  component: ScrollTabsLayout,
  args: {
    type: 'fullWidth',
  },
} as ComponentMeta<typeof ScrollTabsLayout>;

export const Basic: ComponentStory<typeof ScrollTabsLayout> = props => (
  <ScrollTabsLayout {...props}>
    <ScrollTabsLayout.Header>
      <Paper height={200} p={20} backgroundColor="primaryContainer">
        <Title level={4}>Header</Title>
      </Paper>
    </ScrollTabsLayout.Header>

    <ScrollTabsLayout.Item tabId="first" title="First Tab">
      <HStack height={500}>
        <Paper backgroundColor="error" width="100%" p={20}>
          <Title level={4}>First Page</Title>
        </Paper>
      </HStack>
    </ScrollTabsLayout.Item>
    <ScrollTabsLayout.Item tabId="second" title="Second Tab">
      <HStack width="100%" height={500}>
        <Paper backgroundColor="success" width="100%" p={20}>
          <Title level={4}>Second Page</Title>
        </Paper>
      </HStack>
    </ScrollTabsLayout.Item>
    <ScrollTabsLayout.Item tabId="third" title="Third Tab">
      <HStack width="100%" height={500}>
        <Paper backgroundColor="informative" width="100%" p={20}>
          <Title level={4}>Third Page</Title>
        </Paper>
      </HStack>
    </ScrollTabsLayout.Item>
  </ScrollTabsLayout>
);
