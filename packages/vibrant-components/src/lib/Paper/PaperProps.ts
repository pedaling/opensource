import type { Ref } from 'react';
import type {
  BorderSystemProps,
  DisplaySystemProps,
  ElevationSystemProps,
  PositionSystemProps,
  ReactElementChild,
  ResponsiveValue,
  SizingSystemProps,
  SpacingSystemProps,
} from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { BaseColorToken, GradientKind } from '@vibrant-ui/theme';

type PaperProps = {
  ref?: Ref<any>;
  children?: ReactElementChild;
} & Pick<BorderSystemProps, 'borderColor' | 'borderRadiusLevel' | 'borderStyle' | 'borderWidth'> &
  DisplaySystemProps &
  SpacingSystemProps &
  PositionSystemProps &
  Pick<ElevationSystemProps, 'elevationLevel'> &
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
  );

export const withPaperVariation = withVariation<PaperProps>('Paper')();
