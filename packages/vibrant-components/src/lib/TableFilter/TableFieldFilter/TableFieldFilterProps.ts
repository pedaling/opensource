import type { ReactElementChild } from '@vibrant-ui/core';

export type TableFieldFilterProps<Operator extends string> = {
  dataKey: string;
  label: string;
  active: boolean;
  width?: number | string;
  onClose?: () => void;
  selectedOperator: Operator;
  operatorOptions: Record<Operator, string>;
  onOperatorSelect: (operator: Operator) => void;
  field: ReactElementChild;
};
