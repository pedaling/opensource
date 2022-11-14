import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { Body } from '../Body';
import { Paper } from '../Paper';
import { VStack } from '../VStack';
import { ScrollDetector } from './ScrollDetector';

export default {
  title: 'ScrollDetector',
  component: ScrollDetector,
  argTypes: {},
} as ComponentMeta<typeof ScrollDetector>;

export const Basic: ComponentStory<typeof ScrollDetector> = () => (
  <Paper backgroundColor="background" width="100%" height="100%">
    <VStack alignHorizontal="center" spacing={20}>
      <ScrollDetector>
        {({ scrollDirection }) => (
          <Box
            alignItems="center"
            justifyContent="center"
            width="100%"
            height={1400}
            backgroundColor={scrollDirection === 'up' ? 'informative' : 'warning'}
          >
            <Body level={1}>{`${scrollDirection === 'down' ? 'Down' : 'Up'}`}</Body>
          </Box>
        )}
      </ScrollDetector>
    </VStack>
  </Paper>
);
