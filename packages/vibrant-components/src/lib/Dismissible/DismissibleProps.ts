import type { ReactElement, RefObject } from 'react';

export type DismissibleProps = {
  active?: boolean;
  onDismiss: () => void;
  targetRef?: RefObject<HTMLElement>;
  children?: ReactElement;
};
