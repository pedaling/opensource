import type { ReactElement } from 'react';

export type DismissibleProps = {
  active?: boolean;
  onDismiss: () => void;
  children: ReactElement;
};
