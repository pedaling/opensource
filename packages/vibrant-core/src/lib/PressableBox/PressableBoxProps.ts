import type { Ref } from 'react';
import type { ReactElementChild } from '../../types';
import type {
  BackgroundSystemProps,
  BorderSystemProps,
  ColorSystemProps,
  DisplaySystemProps,
  FlexboxSystemProps,
  InteractionSystemProps,
  OverflowSystemProps,
  PositionSystemProps,
  SizingSystemProps,
  SpacingSystemProps,
  TransformSystemProps,
} from '../props';
import { withVariation } from '../withVariation';

type SystemProps = BackgroundSystemProps &
  BorderSystemProps &
  ColorSystemProps &
  DisplaySystemProps &
  FlexboxSystemProps &
  InteractionSystemProps &
  OverflowSystemProps &
  PositionSystemProps &
  SizingSystemProps &
  SpacingSystemProps &
  TransformSystemProps;

export type HipSlopRect = {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type PressableBoxProps = {
  ref?: Ref<any>;
  as?: 'button' | 'div' | 'li';
  disabled?: boolean;
  hitSlop?: HipSlopRect | number;
  ariaLabel?: string;
  onClick?: () => void;
  onFocusIn?: () => void;
  onFocusOut?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  children: ReactElementChild | ReactElementChild[];
} & SystemProps;

export const withPressableBoxVariation = withVariation<PressableBoxProps>('PressableBox')();
