import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { Title } from '../Title';
import { Backdrop } from './Backdrop';

export default {
  title: 'Backdrop',
  component: Backdrop,
  args: {
    open: true,
    transitionDuration: 150,
    zIndex: 1000,
  },
} as ComponentMeta<typeof Backdrop>;

export const Basic: ComponentStory<typeof Backdrop> = props => (
  <Backdrop {...props}>
    <Box alignContent="center" justifyContent="center" mt={100}>
      <Title level={1} textAlign="center" color="primary">
        Backdrop
      </Title>
    </Box>
  </Backdrop>
);
