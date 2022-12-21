import { withVariation } from '@vibrant-ui/core';
import type { Either } from '@vibrant-ui/utils';

export type TableFooterProps = {
  total?: number;
} & Either<
  {
    pagination: true;
    pageSize: number;
    pageCount: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    pageSizeOptions?: number[];
    onPageSizeChange?: (value: number) => void;
  },
  { pagination?: false }
>;

export const withTableFooterVariation = withVariation<TableFooterProps>('TableFooter')();
