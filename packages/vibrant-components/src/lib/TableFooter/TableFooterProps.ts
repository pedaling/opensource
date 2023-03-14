import { withVariation } from '@vibrant-ui/core';
import type { Either } from '@vibrant-ui/utils';

export type TableFooterProps = Either<
  {
    total: number;
    showTotal?: boolean;
    pagination: true;
    defaultPageSize?: number;
    page?: number;
    onPageChange?: (page: number) => void;
    pageSizeOptions?: number[];
    onPageSizeChange?: (pageSize: number) => void;
    testId?: string;
  },
  { pagination?: false; total?: number; testId?: string }
>;

export const withTableFooterVariation = withVariation<TableFooterProps>('TableFooter')();
