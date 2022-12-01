import { withVariation } from '@vibrant-ui/core';

export type PageSizeSectionProps = {
  pageSizeOptions: number[];
  onClickPageSize: (value: number) => void;
};

export const withPageSizeSectionVariation = withVariation<PageSizeSectionProps>('PageSizeSection')();
