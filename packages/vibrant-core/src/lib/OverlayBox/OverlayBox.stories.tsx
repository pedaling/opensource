import { useRef, useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '../Box';
import { PressableBox } from '../PressableBox';
import { Text } from '../Text';
import { OverlayBox } from './OverlayBox';

export default {
  title: 'OverlayBox',
  component: OverlayBox,
  args: {
    width: 400,
    height: 400,
    top: 200,
    left: 0,
  },
} as ComponentMeta<typeof OverlayBox>;

export const Basic: ComponentStory<typeof OverlayBox> = props => {
  const targetRef = useRef(null);
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Box>
      <PressableBox
        ref={targetRef}
        width={200}
        backgroundColor="primary"
        height={200}
        onClick={() => setIsOpened(true)}
      >
        <Text>Open</Text>
      </PressableBox>
      <OverlayBox {...props} open={isOpened} onDismiss={() => setIsOpened(false)} targetRef={targetRef}>
        <Box width="100%" height="100%" backgroundColor="informative">
          <Text>Overlay Area</Text>
        </Box>
      </OverlayBox>
    </Box>
  );
};
