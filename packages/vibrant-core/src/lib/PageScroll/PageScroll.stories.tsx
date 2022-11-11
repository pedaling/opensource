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
  const { isScrollDown, scrollPosition } = useScroll();

  return (
    <Paper backgroundColor="background" width="100%" height="100%">
      <VStack alignHorizontal="center" spacing={20}>
        <Box alignItems="center" justifyContent="center" width="100%" height={1400} backgroundColor="primary">
          <Body level={1} textAlign="center">
            {`${isScrollDown ? 'Down' : 'Up'} (scroll position: ${scrollPosition})`}
          </Body>
        </Box>
      </VStack>
    </Paper>
  );
};
