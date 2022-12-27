import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { ContentArea } from '../ContentArea';
import { VStack } from '../VStack';
import { Tooltip } from './Tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,
  args: {
    maxWidth: 800,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper leo non faucibus rhoncus. Etiam dignissim, urna sit amet placerat dictum, justo lacus ullamcorper nunc, at fermentum magna felis a libero. In tortor ligula, ultricies nec semper ut, bibendum non mauris. Nullam sit amet risus quis eros accumsan sollicitudin vitae ac mauris. ',
    position: 'bottom',
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
