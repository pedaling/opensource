import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { StackedItem } from './StackedItem';

export default {
  title: 'StackedItem',
  component: StackedItem,
  args: {},
} as ComponentMeta<typeof StackedItem>;

export const Basic: ComponentStory<typeof StackedItem> = () => (
  <Box width="100%">
    <Box height={200} backgroundColor="background" />
    <StackedItem id="header" order={2} position="top" height={64}>
      {({ offset }) => (
        <Box position="web_sticky" zIndex={1} top={offset} left={0} right={0} height={64} backgroundColor="primary" />
      )}
    </StackedItem>
    <StackedItem id="header" order={1} position="top">
      {({ offset, setHeight }) => (
        <Box
          position="fixed"
          zIndex={1}
          top={offset}
          left={0}
          right={0}
          height={64}
          backgroundColor="informative"
          onLayout={({ height }) => setHeight(height)}
        />
      )}
    </StackedItem>
    <Box height={200} backgroundColor="background" />
    <StackedItem id="header" order={3} position="top">
      {({ offset, setHeight }) => (
        <Box
          position="web_sticky"
          zIndex={1}
          top={offset}
          left={0}
          right={0}
          height={100}
          backgroundColor="success"
          onLayout={({ height }) => setHeight(height)}
        />
      )}
    </StackedItem>
    <Box height={5000} />
  </Box>
);
