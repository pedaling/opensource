import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { HStack } from '../HStack';
import { PaginationButton } from './PaginationButton';

export default {
  title: 'PaginationButton',
  component: PaginationButton,
  args: {
    type: 'next',
  },
} as ComponentMeta<typeof PaginationButton>;

export const Basic: ComponentStory<typeof PaginationButton> = props => (
  <HStack width="100%" p={20}>
    <PaginationButton {...props} />
  </HStack>
);
