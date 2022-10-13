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
import type { Either } from '@vibrant-ui/utils';

export type PressableProps = BackgroundSystemProps &
  BorderSystemProps &
  Pick<FlexboxSystemProps, 'alignItems' | 'flexBasis' | 'flexGrow' | 'flexShrink' | 'justifyContent'> &
  OverflowSystemProps &
  PositionSystemProps &
  SpacingSystemProps &
  SizingSystemProps & {
    ref?: Ref<any>;
    disabled?: boolean;
    children?: ReactElement;
    cursor?: 'default' | 'pointer';
    ariaLabel?: string;
    onClick?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    hitSlop?: number;
  } & Either<
    {
      as: 'div' | 'li';
      type?: never;
    },
    {
      as?: 'button';
      type?: 'button' | 'submit';
    }
  > &
  (
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
