import type { Ref } from 'react';
import type { Either } from '@vibrant-ui/utils';
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
} & Either<
  {
    as?: 'div' | 'li';
    type?: never;
  },
  {
    as: 'button';
    type?: 'button' | 'submit';
  }
> &
  SystemProps;

export const withPressableBoxVariation = withVariation<PressableBoxProps>('PressableBox')();
