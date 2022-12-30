import { withVariation } from '@vibrant-ui/core';
import type { ContainedButtonProps } from '../../ContainedButton';
import type { OutlinedButtonProps } from '../../OutlinedButton/OutlinedButtonProps';

export type TableHeaderButtonProps =
  | ({
      kind: 'outlined';
    } & Omit<OutlinedButtonProps, 'full' | 'size'>)
  | ({
      kind: 'primary' | 'secondary' | 'tertiary';
    } & Omit<ContainedButtonProps, 'full' | 'kind' | 'size'>);

export const withTableHeaderButtonVariation = withVariation<TableHeaderButtonProps>('TableHeaderButton')();
