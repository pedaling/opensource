import type { ReactElement, Ref } from 'react';
import type {
  BackgroundSystemProps,
  BorderSystemProps,
  FlexboxSystemProps,
  OverflowSystemProps,
  PositionSystemProps,
  ResponsiveValue,
  SizingSystemProps,
  SpacingSystemProps,
} from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { ColorToken } from '@vibrant-ui/theme';

export type PressableProps = BackgroundSystemProps &
  BorderSystemProps &
  Pick<FlexboxSystemProps, 'alignItems' | 'flexGrow' | 'flexShrink' | 'justifyContent'> &
  OverflowSystemProps &
  PositionSystemProps &
  SpacingSystemProps &
  SizingSystemProps & {
    ref?: Ref<any>;
    as?: 'button' | 'div' | 'li';
    disabled?: boolean;
    children?: ReactElement;
    cursor?: 'default' | 'pointer';
    onClick?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
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
