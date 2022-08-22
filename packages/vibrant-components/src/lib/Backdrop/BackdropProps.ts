import type { ReactElement } from 'react';
import type { ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { ColorToken } from '@vibrant-ui/theme';

type BackdropProps = {
  open: boolean;
  zIndex?: ResponsiveValue<number>;
  color?: Extract<ColorToken, 'dim' | 'transparent'>;
  transitionDuration?: number;
  children: ReactElement;
  onClick?: () => void;
};

export const withBackdropVariation = withVariation<BackdropProps>('Backdrop')();
