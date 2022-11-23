import { propVariant, withVariation } from '@vibrant-ui/core';

export type PaginationProps = {
  pageCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  extra?: boolean;
};

export const withPaginationVariation = withVariation<PaginationProps>('Pagination')(
  propVariant({
    props: [
      {
        name: 'extra',
        default: false,
        keep: true,
      },
    ],
    variants: {
      true: {
        spacing: 30,
      },
      false: {
        spacing: 16,
      },
    },
  })
);
