import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box, Text } from '@vibrant-ui/core';
import { Transition } from '@vibrant-ui/motion';
import { ScrollDetector } from '../ScrollDetector';
import { StackedItem } from '../StackedItem';
import { GetStackedOffset } from './GetStackedOffset';

export default {
  title: 'GetStackedOffset',
  component: GetStackedOffset,
  args: {},
} as ComponentMeta<typeof GetStackedOffset>;

export const Basic: ComponentStory<typeof GetStackedOffset> = () => (
  <Box width="100%">
    <ScrollDetector>
      {({ scrollDirection }) => (
        <StackedItem id="header" order={1} position="top" height={scrollDirection === 'up' ? 64 : 0}>
          {() => (
            <Transition animation={{ top: scrollDirection === 'up' ? 0 : -64 }}>
              <Box position="fixed" zIndex={1} left={0} right={0} height={64} backgroundColor="informative" />
            </Transition>
          )}
        </StackedItem>
      )}
    </ScrollDetector>
    <StackedItem id="header" order={2} position="top" height={64}>
      {({ offset }) => (
        <Transition animation={{ top: offset }}>
          <Box position="web_sticky" zIndex={1} left={0} right={0} height={64} backgroundColor="primary" />
        </Transition>
      )}
    </StackedItem>
    <Box height={200} backgroundColor="background" />
    <GetStackedOffset position="top">
      {({ offset }) => (
        <Box position="fixed" bottom={100}>
          <Text>offset: {offset}</Text>
        </Box>
      )}
    </GetStackedOffset>
    <Box height={5000} />
  </Box>
);
