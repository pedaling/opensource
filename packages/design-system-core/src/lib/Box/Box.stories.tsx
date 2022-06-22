import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from './Box';

export default {
  title: 'Box',
  component: Box,
  args: {
    width: 300,
    height: 300,
    backgroundColor: 'primary',
  },
} as ComponentMeta<typeof Box>;

export const Basic: ComponentStory<typeof Box> = props => <Box {...props}>Box</Box>;
