import { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { VStack } from '../VStack';
import { Pagination } from './Pagination';
export default {
  title: 'Pagination',
  component: Pagination,
  args: {
    pageSize: 10,
    pageCount: 10,
    currentPage: 1,
  },
} as ComponentMeta<typeof Pagination>;

export const Basic: ComponentStory<typeof Pagination> = props => {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <VStack width="100%" p={20}>
      <Pagination {...props} currentPage={currentPage} onPageChange={onPageChange} />
    </VStack>
  );
};
