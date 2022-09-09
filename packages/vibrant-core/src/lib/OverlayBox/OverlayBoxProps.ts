import type { ForwardedRef, FunctionComponentElement, RefObject } from 'react';
import type { PositionSystemProps, SizingSystemProps } from '../props';
import { withVariation } from '../withVariation';

export type OverlayBoxProps = SizingSystemProps &
  Omit<PositionSystemProps, 'position'> & {
    open: boolean;
    ref?: ForwardedRef<any>;
    targetRef: RefObject<any>;
    children: FunctionComponentElement<{ ref?: ForwardedRef<any> }>;
    onDismiss?: () => void;
  };

export const withOverlayBoxVariation = withVariation<OverlayBoxProps>('OverlayBox')();
