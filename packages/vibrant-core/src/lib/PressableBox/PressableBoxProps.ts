import type { Ref } from 'react';
import type { ReactElementChild } from '../../types';
import type { BoxElements } from '../Box';
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

export type PressableBoxProps = {
  ref?: Ref<any>;
  disabled?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
  onFocusIn?: () => void;
  onFocusOut?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  children?: ReactElementChild | ReactElementChild[];
  role?: string;
  ariaChecked?: boolean;
  ariaLabelledBy?: string;
  as?: BoxElements;
  buttonType?: 'button' | 'submit';
} & SystemProps;

export const withPressableBoxVariation = withVariation<PressableBoxProps>('PressableBox')();
