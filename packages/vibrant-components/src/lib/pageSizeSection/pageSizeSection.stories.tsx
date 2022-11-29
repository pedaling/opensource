import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { VStack } from '../VStack';
import { PageSizeSection } from './PageSizeSection';
export default {
  title: 'PageSizeSection',
  component: PageSizeSection,
  args: {
    total: 100,
    pageSizeOptions: [
      {
        label: '10',
        value: 10,
        initial: true,
        onClick: () => {},
      },
      {
        label: '100',
        value: 100,
        initial: false,
        onClick: () => {},
      },
    ],
  },
} as ComponentMeta<typeof PageSizeSection>;

export const Basic: ComponentStory<typeof PageSizeSection> = props => (
  <VStack width="100%" p={20}>
    <PageSizeSection {...props} />
  </VStack>
);
