import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '../Box';
import { Text } from '../Text';
import { Portal } from './Portal';

export default {
  title: 'Portal',
  component: Portal,
  args: {},
} as ComponentMeta<typeof Portal>;

export const Basic: ComponentStory<typeof Portal> = props => (
  <>
    <Box width={100} height={100} backgroundColor="primary" />
    <Portal {...props}>
      <Box
        zIndex={1}
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        alignContent="center"
        justifyContent="center"
        backgroundColor="dim"
      >
        <Text typography="title1" textAlign="center" color="white">
          Portal
        </Text>
      </Box>
    </Portal>
  </>
);
