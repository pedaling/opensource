import { useEffect, useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Body, Paper, VStack } from '@vibrant-ui/components';
import { Box } from '../Box';
import { PageScroll, useScroll } from './PageScroll';

export default {
  title: 'PageScroll',
  component: PageScroll,
  argTypes: {},
} as ComponentMeta<typeof PageScroll>;

export const Basic: ComponentStory<typeof PageScroll> = () => {
  const { scrollDirection, addEventListener } = useScroll();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const cleanEventListener = addEventListener(({ position }) => {
      setScrollPosition(position);
    });

    return cleanEventListener;
  }, [addEventListener]);

  return (
    <Paper backgroundColor="background" width="100%" height="100%">
      <VStack alignHorizontal="center" spacing={20}>
        <Box alignItems="center" justifyContent="center" width="100%" height={1400} backgroundColor="primary">
          <Body level={1} textAlign="center">
            {`${scrollDirection === 'down' ? 'Down' : 'Up'} (scroll position: ${scrollPosition.toFixed(2)})`}
          </Body>
        </Box>
      </VStack>
    </Paper>
  );
};
