import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Body, HStack, Paper, Title } from '@vibrant-ui/components';
import { ScrollTabsLayout } from './ScrollTabsLayout';

export default {
  title: 'ScrollTabsLayout',
  component: ScrollTabsLayout,
  args: {
    type: 'fullWidth',
  },
} as ComponentMeta<typeof ScrollTabsLayout>;

export const Basic: ComponentStory<typeof ScrollTabsLayout> = props => (
  <ScrollTabsLayout
    header={
      <Paper height={200} backgroundColor="surface1">
        <Body level={2}>Header</Body>
      </Paper>
    }
    {...props}
  >
    <ScrollTabsLayout.Item tabId="first" title="First Tab">
      <HStack height={500}>
        <Paper backgroundColor="primary" width="100%" pt={44}>
          <Title level={3}>First Page</Title>
        </Paper>
      </HStack>
    </ScrollTabsLayout.Item>
    <ScrollTabsLayout.Item tabId="second" title="Second Tab">
      <HStack width="100%" height={500}>
        <Paper backgroundColor="warning" width="100%" pt={44}>
          <Title level={3}>Second Page</Title>
        </Paper>
      </HStack>
    </ScrollTabsLayout.Item>
    <ScrollTabsLayout.Item tabId="third" title="Third Tab">
      <HStack width="100%" height={500}>
        <Paper backgroundColor="informative" width="100%" pt={44}>
          <Title level={3}>Third Page</Title>
        </Paper>
      </HStack>
    </ScrollTabsLayout.Item>
  </ScrollTabsLayout>
);
