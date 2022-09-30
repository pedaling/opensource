import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { Paragraph } from '../Paragraph';
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

export const Scrollable: ComponentStory<typeof Backdrop> = props => (
  <Backdrop {...props} scrollable={true} py={40} px={20}>
    <Box width="100%" p={20} backgroundColor="white">
      <Paragraph level={1}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Paragraph>
      <Paragraph level={1}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Paragraph>
      <Paragraph level={1}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Paragraph>
      <Paragraph level={1}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Paragraph>
    </Box>
  </Backdrop>
);
