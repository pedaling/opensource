import { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TableFooter } from './TableFooter';

export default {
  title: 'TableFooter',
  component: TableFooter,
  args: {
    total: 101,
    pagination: true,
    pageSize: 5,
    pageCount: 10,
    pageSizeOptions: [5, 10],
  },
} as ComponentMeta<typeof TableFooter>;

export const Basic: ComponentStory<typeof TableFooter> = props => <TableFooter {...props} />;

export const Controlled: ComponentStory<typeof TableFooter> = props => {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (currentPage: number) => {
    setCurrentPage(currentPage);
  };

  return (
    <TableFooter {...props} total={101} pagination={true} currentPage={currentPage} onPageChange={handlePageChange} />
  );
};
