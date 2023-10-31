import type { ReactElement } from 'react';
import { withVariation } from '@vibrant-ui/core';

export type TableSearchProps = {
  children: ReactElement | ReactElement[];
  testId?: string;
  onSubmit?: (fieldValue: string, optionValue?: string) => void;
  onTextChange?: ({ value, prevent }: { value: string; prevent: () => void }) => void;
};

export const withTableSearchVariation = withVariation<TableSearchProps>('TableSearch')();
