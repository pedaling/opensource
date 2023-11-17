import type { Ref } from 'react';
import type {
  BackgroundSystemProps,
  BorderSystemProps,
  BoxElements,
  FlexboxSystemProps,
  InteractionSystemProps,
  OverflowSystemProps,
  PositionSystemProps,
  ReactElementChildren,
  ResponsiveValue,
  SizingSystemProps,
  SpacingSystemProps,
} from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { ColorToken } from '@vibrant-ui/theme';

export type PressableProps = BackgroundSystemProps &
  BorderSystemProps &
  FlexboxSystemProps &
  OverflowSystemProps &
  PositionSystemProps &
  SpacingSystemProps &
  SizingSystemProps &
  Pick<InteractionSystemProps, 'hitSlop'> & {
    ref?: Ref<any>;
    disabled?: boolean;
    children?: ReactElementChildren;
    cursor?: 'default' | 'pointer';
    ariaLabel?: string;
    onClick?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    testId?: string;
    as?: BoxElements;
    buttonType?: 'button' | 'submit';
    href?: string;
  } & (
    | {
        overlayColor: ResponsiveValue<ColorToken>;
        interactions?: ('active' | 'focus' | 'hover')[];
      }
    | {
        overlayColor?: never;
        interactions?: ('active' | 'focus')[];
      }
  );

export const withPressableVariation = withVariation<PressableProps>('Pressable')();
