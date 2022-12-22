import { withVariation } from '@vibrant-ui/core';
import type { Either } from '@vibrant-ui/utils';

export type TableFooterProps = Either<
  {
    total: number;
    showTotal?: boolean;
    pagination: true;
    defaultPageSize: number;
    onPageChange?: (page: number) => void;
    pageSizeOptions?: number[];
    onPageSizeChange?: (value: number) => void;
  },
  { pagination?: false; total?: number }
>;

export const withTableFooterVariation = withVariation<TableFooterProps>('TableFooter')();
