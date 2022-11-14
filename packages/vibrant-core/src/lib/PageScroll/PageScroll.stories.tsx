import { useEffect, useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '../Box';
import { Text } from '../Text';
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
    const cleanEventListener = addEventListener(({ scrollPosition }) => {
      setScrollPosition(scrollPosition);
    });

    return cleanEventListener;
  }, [addEventListener]);

  return (
    <Box backgroundColor="background" width="100%" height="100%">
      <Box alignItems="center" rowGap={20}>
        <Box alignItems="center" justifyContent="center" width="100%" height={1400} backgroundColor="primary">
          <Text>{`${scrollDirection === 'down' ? 'Down' : 'Up'} (scroll position: ${scrollPosition.toFixed(2)})`}</Text>
        </Box>
      </Box>
    </Box>
  );
};
