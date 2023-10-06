import type { ReactElement } from 'react';
import type { DisplaySystemProps, ResponsiveValue, SpacingSystemProps } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { ColorToken } from '@vibrant-ui/theme';

type BackdropProps = {
  open: boolean;
  zIndex?: ResponsiveValue<number>;
  color?: Extract<ColorToken, 'dim' | 'transparent'>;
  transitionDuration?: number;
  children: ReactElement;
  scrollable?: boolean;
  onClick?: () => void;
  onDismiss?: () => void;
  testId?: string;
} & Pick<SpacingSystemProps, 'p' | 'pb' | 'pl' | 'pr' | 'pt' | 'px' | 'py'> &
  Pick<DisplaySystemProps, 'display'>;

export const withBackdropVariation = withVariation<BackdropProps>('Backdrop')();
