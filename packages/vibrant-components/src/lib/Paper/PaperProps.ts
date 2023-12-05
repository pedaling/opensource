import type { Ref } from 'react';
import type {
  BorderSystemProps,
  BoxElements,
  DisplaySystemProps,
  ElevationSystemProps,
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
import type { BaseColorToken, GradientKind } from '@vibrant-ui/theme';
import type { Either } from '@vibrant-ui/utils';

type PaperProps = Pick<BorderSystemProps, 'borderColor' | 'borderStyle' | 'borderWidth'> &
  DisplaySystemProps &
  SpacingSystemProps &
  InteractionSystemProps &
  PositionSystemProps &
  Pick<FlexboxSystemProps, 'flexBasis' | 'flexGrow' | 'flexShrink'> &
  Pick<ElevationSystemProps, 'elevationLevel'> &
  OverflowSystemProps &
  SizingSystemProps &
  (
    | {
        elevationLevel: ElevationSystemProps['elevationLevel'];
        backgroundColor: ResponsiveValue<Exclude<BaseColorToken, 'transparent'>>;
        gradient?: never;
      }
    | ({
        elevationLevel?: never;
      } & (
        | {
            backgroundColor?: never;
            gradient?: ResponsiveValue<GradientKind>;
          }
        | {
            backgroundColor?: ResponsiveValue<BaseColorToken>;
            gradient?: never;
          }
      ))
  ) & {
    ref?: Ref<any>;
    id?: string;
    as?: BoxElements;
    children?: ReactElementChildren;
    testId?: string;
  } & Either<
    Pick<BorderSystemProps, 'roundedBottomLeft' | 'roundedBottomRight' | 'roundedTopLeft' | 'roundedTopRight'>,
    Pick<BorderSystemProps, 'rounded'>
  >;

export const withPaperVariation = withVariation<PaperProps>('Paper')();
