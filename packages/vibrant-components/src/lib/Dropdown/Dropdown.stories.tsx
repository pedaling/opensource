import { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Body } from '../Body';
import { HStack } from '../HStack';
import { Pressable } from '../Pressable';
import { Title } from '../Title';
import { VStack } from '../VStack';
import { Dropdown } from './Dropdown';

const DropdownContent = () => {
  const [opened, setOpened] = useState(false);

  return opened ? (
    <VStack spacing={20} px={20}>
      <Box base={Pressable} onClick={() => setOpened(false)}>
        <HStack alignItems="center" spacing={4}>
          <Icon.ChevronLeft.Regular size={16} />
          <Title level={6}>화질</Title>
        </HStack>
      </Box>
      <Body level={2}>1080p</Body>
      <Body level={2}>720p</Body>
      <Body level={2}>540p</Body>
    </VStack>
  ) : (
    <VStack spacing={20}>
      <Box base={Pressable} onClick={() => setOpened(true)}>
        <HStack px={20} alignment="space-between" alignItems="flex-end">
          <Body level={2}>화질</Body>
          <Body level={3} color="onView2">
            1080p
          </Body>
        </HStack>
      </Box>
      <HStack px={20} alignment="space-between" alignItems="flex-end">
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
    renderContents: () => <DropdownContent />,
    renderOpener: open => (
      <Box base={Pressable} backgroundColor="primary" onClick={open} p={20} height={100}>
        <Body level={1}>Click Me</Body>
      </Box>
    ),
    position: 'bottom',
    spacing: 8,
  },
} as ComponentMeta<typeof Dropdown>;

export const Basic: ComponentStory<typeof Dropdown> = props => (
  <VStack mt={200} width="100%">
    <Box mx="auto">
      <Dropdown {...props} />
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
