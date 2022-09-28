import { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Body } from '../Body';
import { HStack } from '../HStack';
import { Paragraph } from '../Paragraph';
import { Pressable } from '../Pressable';
import { Title } from '../Title';
import { VStack } from '../VStack';
import { ModalBottomSheet } from './ModalBottomSheet';

const DropdownContent = () => {
  const [opened, setOpened] = useState(false);

  return opened ? (
    <VStack spacing={20} px={[20, 32]}>
      <Pressable onClick={() => setOpened(false)}>
        <HStack alignItems="center" spacing={4}>
          <Icon.ChevronLeft.Regular size={16} />
          <Title level={6}>화질</Title>
        </HStack>
      </Pressable>
      <Body level={2}>1080p</Body>
      <Body level={2}>720p</Body>
      <Body level={2}>540p</Body>
    </VStack>
  ) : (
    <VStack spacing={20}>
      <Pressable onClick={() => setOpened(true)}>
        <HStack px={[20, 32]} alignment="space-between" alignItems="flex-end">
          <Body level={2}>화질</Body>
          <Body level={3} color="onView2">
            1080p
          </Body>
        </HStack>
      </Pressable>
      <HStack px={[20, 32]} alignment="space-between" alignItems="flex-end">
        <Body level={2}>자동 재생</Body>
        <Body level={3} color="onView2">
          켜짐
        </Body>
      </HStack>
    </VStack>
  );
};

export default {
  title: 'ModalBottomSheet',
  component: ModalBottomSheet,
  args: {
    open: false,
    renderContents: () => (
      <Paragraph level={3} px={[20, 32]}>
        Sample Text
      </Paragraph>
    ),
    renderOpener: open => (
      <Pressable backgroundColor="primary" onClick={open} p={20}>
        <Body level={1}>Click Me</Body>
      </Pressable>
    ),
    position: 'bottom',
    spacing: 8,
  },
  argTypes: {
    onPrimaryCtaOnClick: { action: 'onPrimaryCtaOnClick' },
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
