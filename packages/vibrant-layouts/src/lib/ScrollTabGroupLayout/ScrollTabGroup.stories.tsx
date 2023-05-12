import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Body, HStack, Paper, Title } from '@vibrant-ui/components';
import { ScrollTabGroupLayout } from './ScrollTabGroupLayout';
import { ScrollTabGroupLayoutItem } from './ScrollTabGroupLayoutItem';

export default {
  title: 'ScrollTabGroupLayout',
  component: ScrollTabGroupLayout,
} as ComponentMeta<typeof ScrollTabGroupLayout>;

export const Basic: ComponentStory<typeof ScrollTabGroupLayout> = props => (
  <ScrollTabGroupLayout
    header={
      <Paper width="100%" height={200} backgroundColor="surface1">
        <Body level={2}>Header</Body>
      </Paper>
    }
    {...props}
  >
    <ScrollTabGroupLayoutItem
      tabId="first"
      title="First Tab"
      renderContent={() => (
        <HStack width="100%" height={500}>
          <Paper backgroundColor="primary" width="100%" pt={60}>
            <Title level={3}>First Page</Title>
          </Paper>
        </HStack>
      )}
    />
    <ScrollTabGroupLayoutItem
      tabId="second"
      title="Second Tab"
      renderContent={() => (
        <HStack width="100%" height={500}>
          <Paper backgroundColor="warning" width="100%" pt={60}>
            <Title level={3}>Second Page</Title>
          </Paper>
        </HStack>
      )}
    />
    <ScrollTabGroupLayoutItem
      tabId="third"
      title="Third Tab"
      renderContent={() => (
        <HStack width="100%" height={500}>
          <Paper backgroundColor="informative" width="100%" pt={60}>
            <Title level={3}>Third Page</Title>
          </Paper>
        </HStack>
      )}
    />
  </ScrollTabGroupLayout>
);
