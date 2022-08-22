import type { ForwardedRef, FunctionComponentElement } from 'react';

export type DismissibleProps = {
  active?: boolean;
  onDismiss?: () => void;
  children: FunctionComponentElement<{ ref?: ForwardedRef<any> }>;
};
