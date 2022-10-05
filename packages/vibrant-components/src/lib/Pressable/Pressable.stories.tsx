import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { VStack } from '../VStack';
import { Pressable } from './Pressable';

export default {
  title: 'Pressable',
  component: Pressable,
  args: {
    disabled: false,
    overlayColor: 'primary',
    interactions: ['focus', 'hover', 'active'],
    as: 'button',
  },
} as ComponentMeta<typeof Pressable>;

export const Basic: ComponentStory<typeof Pressable> = props => (
  <Pressable
    ariaLabel="pressable"
    width={200}
    height={200}
    borderWidth={1}
    borderStyle="solid"
    borderColor="primary"
    {...props}
  ></Pressable>
);

export const MultiplePressable: ComponentStory<typeof Pressable> = props => (
  <VStack spacing={20}>
    <Pressable width={200} height={200} borderWidth={1} borderStyle="solid" borderColor="primary" {...props} />
    <Pressable width={200} height={200} borderWidth={1} borderStyle="solid" borderColor="primary" {...props} />
  </VStack>
);
