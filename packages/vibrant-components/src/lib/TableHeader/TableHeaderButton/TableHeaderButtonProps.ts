import { withVariation } from '@vibrant-ui/core';
import type { ContainedButtonProps } from '../../ContainedButton';
import type { OutlinedButtonProps } from '../../OutlinedButton/OutlinedButtonProps';

export type TableHeaderButtonProps = Omit<ContainedButtonProps, 'full' | 'kind' | 'size'> &
  Omit<OutlinedButtonProps, 'full' | 'size'> & {
    kind: 'outlined' | 'primary' | 'secondary' | 'tertiary';
  };

export const withTableHeaderButtonVariation = withVariation<TableHeaderButtonProps>('TableHeaderButton')();
