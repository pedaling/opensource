import { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { ResponsiveValue } from '@vibrant-ui/core';
import { Box, PressableBox, Text } from '@vibrant-ui/core';
import { CSSTransition } from './CSSTransition';

export default {
  title: 'CSSTransition',
  component: CSSTransition,
  args: {
    property: 'left',
    duration: 300,
    easing: 'easeOutQuad',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
} as ComponentMeta<typeof CSSTransition>;

export const Basic: ComponentStory<typeof CSSTransition> = props => {
  const [left, setLeft] = useState<ResponsiveValue<number>>(0);

  return (
    <>
      <PressableBox onClick={() => setLeft(left === 0 ? [100, 150, 200] : 0)}>
        <Text typography="title2" fontWeight="medium">
          click
        </Text>
      </PressableBox>
      <CSSTransition {...props}>
        <Box position="fixed" top={100} left={left} width={100} height={100} backgroundColor="informative" />
      </CSSTransition>
    </>
  );
};
