import { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { Body } from '../Body';
import { Pressable } from '../Pressable';
import { VStack } from '../VStack';
import { Dropdown } from './Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,
  args: {
    renderContents: () => (
      <Box px={20} width={150}>
        <Body level={2}>Sample Text</Body>
      </Box>
    ),
    renderOpener: open => (
      <Box base={Pressable} backgroundColor="primary" onClick={open} p={20}>
        <Body level={1}>Click Me</Body>
      </Box>
    ),
    position: 'top',
    spacing: 10,
  },
} as ComponentMeta<typeof Dropdown>;

export const Basic: ComponentStory<typeof Dropdown> = props => (
  <VStack mt={200} mx="auto">
    <Dropdown {...props} />
  </VStack>
);

export const WithHeightAnimation: ComponentStory<typeof Dropdown> = props => {
  const [itemSize, setItemSize] = useState(1);

  const renderContents = () => (
    <Box px={20} width={150}>
      <Box
        base={Pressable}
        py={8}
        onClick={() => {
          setItemSize(5);
        }}
      >
        <Body level={2}>Change Height</Body>
      </Box>
      <Box as="ul">
        {Array.from({ length: itemSize }, (_, index) => (
          <Box as="li" key={index} py={8}>
            <Body level={2}>Item {index + 1}</Body>
          </Box>
        ))}
      </Box>
    </Box>
  );

  return (
    <VStack mt={200} mx="auto">
      <Dropdown {...props} renderContents={renderContents} />
    </VStack>
  );
};

export const WithFlippedPositionWhenOverflow: ComponentStory<typeof Dropdown> = props => (
  <VStack mx="auto">
    <Dropdown {...props} />
  </VStack>
);
