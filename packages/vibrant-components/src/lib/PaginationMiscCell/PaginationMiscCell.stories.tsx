import { useState } from 'react';
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

export const Basic: ComponentStory<typeof PaginationMiscCell> = props => {
  const [selected, setSelected] = useState(0);
  const onClick = (page: number) => setSelected(page);

  return (
    <HStack width="100%" p={20}>
      <PaginationMiscCell {...props} onClick={onClick} selected={selected === 1} />
    </HStack>
  );
};
