import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { ContentArea } from '../ContentArea';
import { VStack } from '../VStack';
import { Tooltip } from './Tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,
  args: {
    position: 'bottom',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  argTypes: {
    content: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof Tooltip>;

export const Basic: ComponentStory<typeof Tooltip> = props => (
  <ContentArea>
    <VStack height={300} alignHorizontal="center" alignVertical="center">
      <Tooltip {...props}>
        <Box width={100} height={100} backgroundColor="warning" />
      </Tooltip>
    </VStack>
  </ContentArea>
);

export const ElementContent: ComponentStory<typeof Tooltip> = props => (
  <ContentArea>
    <VStack height={300} alignHorizontal="center" alignVertical="center">
      <Tooltip {...props} content={<Box width={200} height={200} backgroundColor="informative" />}>
        <Box width={100} height={100} backgroundColor="warning" />
      </Tooltip>
    </VStack>
  </ContentArea>
);
