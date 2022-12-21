import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TableFooter } from './TableFooter';

export default {
  title: 'TableFooter',
  component: TableFooter,
  args: {
    total: 101,
    pagination: true,
    pageSize: 5,
    currentPage: 1,
    pageCount: 10,
    pageSizeOptions: [5, 10],
  },
} as ComponentMeta<typeof TableFooter>;

export const Basic: ComponentStory<typeof TableFooter> = props => <TableFooter {...props} />;
