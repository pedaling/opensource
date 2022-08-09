import type { Ref } from 'react';
import type {
  BorderProps,
  DisplayProps,
  ElevationProps,
  ReactElementChild,
  ResponsiveValue,
  SizingProps,
  SpacingProps,
} from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { BaseColorToken, GradientKind } from '@vibrant-ui/theme';
type PaperProps = {
  ref?: Ref<any>;
  children?: ReactElementChild;
} & Pick<BorderProps, 'borderColor' | 'borderRadiusLevel' | 'borderStyle' | 'borderWidth'> &
  DisplayProps &
  SpacingProps &
  Pick<ElevationProps, 'elevationLevel'> &
  SizingProps &
  (
    | {
        elevationLevel: ElevationProps['elevationLevel'];
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
