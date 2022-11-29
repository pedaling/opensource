import { withVariation } from '@vibrant-ui/core';

export type PageSizeOption = {
  label: string;
  value: number;
  initial: boolean;
  onClick: (value: number) => void;
};

export type PageSizeSectionProps = {
  total: number;
  pageSizeOptions: PageSizeOption[];
};

export const withPageSizeSectionVariation = withVariation<PageSizeSectionProps>('PageSizeSection')();
