import { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box, ScrollBox } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Body } from '../Body';
import { FloatingActionButton } from '../FloatingActionButton';
import { HStack } from '../HStack';
import { ModalBottomSheet } from '../ModalBottomSheet';
import { Paragraph } from '../Paragraph';
import { Pressable } from '../Pressable';
import { Title } from '../Title';
import { VStack } from '../VStack';
import { Dropdown } from './Dropdown';

const DropdownContent = () => {
  const [opened, setOpened] = useState(false);

  return opened ? (
    <VStack spacing={20} px={20}>
      <Pressable onClick={() => setOpened(false)}>
        <HStack alignVertical="center" spacing={4}>
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
        <HStack px={20} alignHorizontal="space-between" alignVertical="end">
          <Body level={2}>화질</Body>
          <Body level={3} color="onView2">
            1080p
          </Body>
        </HStack>
      </Pressable>
      <HStack px={20} alignHorizontal="space-between" alignVertical="end">
        <Body level={2}>자동 재생</Body>
        <Body level={3} color="onView2">
          켜짐
        </Body>
      </HStack>
    </VStack>
  );
};

export default {
  title: 'Dropdown',
  component: Dropdown,
  args: {
    defaultOpen: false,
    renderContents: () => <DropdownContent />,
    renderOpener: ({ open }) => (
      <Pressable backgroundColor="primary" onClick={open} p={20} height={100}>
        <Body level={1}>Click Me</Body>
      </Pressable>
    ),
    position: 'bottom',
    spacing: 8,
    py: 12,
  },
} as ComponentMeta<typeof Dropdown>;

export const Basic: ComponentStory<typeof Dropdown> = props => (
  <VStack mt={200} width="100%">
    <Box mx="auto">
      <Dropdown {...props} />
    </Box>
  </VStack>
);

export const WithLongWidth: ComponentStory<typeof Dropdown> = props => (
  <VStack width="100%">
    <Box mx="auto">
      <Dropdown
        {...props}
        renderContents={() => (
          <HStack width={400} px={20} alignHorizontal="space-between" alignVertical="end">
            <Body level={2}>화질</Body>
            <Body level={3} color="onView2">
              1080p
            </Body>
          </HStack>
        )}
      />
    </Box>
  </VStack>
);

export const WithLongContent: ComponentStory<typeof Dropdown> = props => (
  <VStack width="100%">
    <Box mx="auto">
      <Dropdown
        {...props}
        renderContents={() => (
          <>
            {Array.from({ length: 20 }, (_, index) => (
              <Body key={index} p={10} level={2}>
                자동 재생
              </Body>
            ))}
          </>
        )}
      />
    </Box>
  </VStack>
);

export const WithFloatingActionButton: ComponentStory<typeof Dropdown> = ({ open: _, ...props }) => (
  <VStack width="100%">
    <Box mx="auto">
      <Dropdown
        {...props}
        position="top-end"
        renderOpener={({ ref, open }) => (
          <FloatingActionButton ref={ref} IconComponent={Icon.ArrowUpToLine.Thin} onClick={open} />
        )}
      />
    </Box>
  </VStack>
);

export const WithModalBottomSheet: ComponentStory<typeof Dropdown> = ({ open: _, ...props }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ScrollBox width="100%">
      <Box mx="auto">
        <Dropdown
          {...props}
          defaultOpen={false}
          position="top-end"
          renderOpener={({ open }) => (
            <Pressable backgroundColor="primary" onClick={open} p={20} height={100}>
              <Body level={1}>Click Me</Body>
            </Pressable>
          )}
          renderContents={({ close }) => (
            <Pressable
              width={100}
              onClick={() => {
                close();

                setModalOpen(true);
              }}
            >
              <Body px={10} level={1}>
                Close
              </Body>
            </Pressable>
          )}
        />
      </Box>
      <ModalBottomSheet open={modalOpen} onClose={() => setModalOpen(false)} />
      <Paragraph level={1}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
        took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
        software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the
        printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
        dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
        book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
        Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
        Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
        it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
        including versions of Lorem Ipsum.
      </Paragraph>
    </ScrollBox>
  );
};

export const WithControlledOpen: ComponentStory<typeof ModalBottomSheet> = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Pressable backgroundColor="primary" onClick={() => setOpen(true)} p={20} mx="auto">
        <Body level={1}>Open</Body>
      </Pressable>
      <Box mx="auto">
        <Dropdown open={open} onClose={() => setOpen(false)} renderContents={() => <DropdownContent />} />
      </Box>
    </>
  );
};
