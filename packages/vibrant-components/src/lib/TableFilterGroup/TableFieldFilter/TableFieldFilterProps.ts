import type { ReactElementChild, ResponsiveValue } from '@vibrant-ui/core';

export type TableFieldFilterProps<Operator extends string> = {
  dataKey: string;
  label: string;
  active: boolean;
  minWidth?: number | string;
  onOpen?: () => void;
  onClose?: () => void;
  selectedOperator: Operator;
  operatorOptions: { label: string; operator: Operator }[];
  onOperatorSelect: (operator: Operator) => void;
  field: ReactElementChild;
  maxWidth?: ResponsiveValue<number | string>;
  lineLimit?: ResponsiveValue<number>;
  testId?: string;
};
