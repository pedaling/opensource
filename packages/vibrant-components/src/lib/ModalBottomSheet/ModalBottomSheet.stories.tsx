import { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { Body } from '../Body';
import { Paragraph } from '../Paragraph';
import { Pressable } from '../Pressable';
import { VStack } from '../VStack';
import { ModalBottomSheet } from './ModalBottomSheet';

export default {
  title: 'ModalBottomSheet',
  component: ModalBottomSheet,
  args: {
    defaultOpen: false,
    title: 'Title',
    renderOpener: ({ open }) => (
      <Pressable backgroundColor="primary" onClick={open} p={20}>
        <Body level={1}>Click Me</Body>
      </Pressable>
    ),
  },
  argTypes: {
    onPrimaryButtonClick: { action: 'onPrimaryButtonClick' },
  },
} as ComponentMeta<typeof ModalBottomSheet>;

export const Basic: ComponentStory<typeof ModalBottomSheet> = props => (
  <VStack mt={200} width="100%">
    <Box mx="auto">
      <ModalBottomSheet title="" {...props} />
    </Box>
  </VStack>
);

export const WithLongContent: ComponentStory<typeof ModalBottomSheet> = props => (
  <VStack width="100%">
    <Box mx="auto">
      <ModalBottomSheet
        {...props}
        renderContents={() => (
          <VStack spacing={20} px={[20, 32]}>
            <Paragraph level={1}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
              the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
              software like Aldus PageMaker including versions of Lorem Ipsum.
            </Paragraph>
          </VStack>
        )}
      />
    </Box>
  </VStack>
);

export const ControlledOpen: ComponentStory<typeof ModalBottomSheet> = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Pressable backgroundColor="primary" onClick={() => setOpen(true)} p={20} mx="auto">
        <Body level={1}>완강하기</Body>
      </Pressable>
      <Box mx="auto">
        <ModalBottomSheet
          title="클래스 완강을 축하합니다"
          subtitle="클래스메이트님을 위해 축하 선물을 준비했어요!"
          open={open}
          onClose={() => setOpen(false)}
        />
      </Box>
    </>
  );
};
