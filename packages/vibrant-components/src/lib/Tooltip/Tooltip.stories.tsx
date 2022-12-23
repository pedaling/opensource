import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { ContentArea } from '../ContentArea';
import { VStack } from '../VStack';
import { Tooltip } from './Tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,
  args: {
    content: 'Hi my name is kim lou lou',
    position: 'bottom',
  },
} as ComponentMeta<typeof Tooltip>;

export const Basic: ComponentStory<typeof Tooltip> = props => (
  <ContentArea>
    <VStack height={600} alignHorizontal="start" alignVertical="center">
      <Tooltip {...props}>
        <Box width={100} height={100} backgroundColor="warning" />
      </Tooltip>
    </VStack>
  </ContentArea>
);
