import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { HStack } from '../HStack';
import { PaginationMiscCell } from './PaginationMiscCell';

export default {
  title: 'PaginationMiscCell',
  component: PaginationMiscCell,
  args: {
    page: 10,
  },
} as ComponentMeta<typeof PaginationMiscCell>;

export const Basic: ComponentStory<typeof PaginationMiscCell> = props => (
  <HStack width="100%" p={20}>
    <PaginationMiscCell {...props} />
  </HStack>
);
