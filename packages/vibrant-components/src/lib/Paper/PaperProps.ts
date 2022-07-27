import type {
  BorderProps,
  DisplayProps,
  ReactElementChild,
  ResponsiveValue,
  SizingProps,
  SpacingProps,
} from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { BaseColorToken, GradientKind } from '@vibrant-ui/theme';

type PaperProps = {
  children?: ReactElementChild;
} & (
  | {
      backgroundColor?: never;
      gradient?: ResponsiveValue<GradientKind>;
    }
  | {
      backgroundColor?: ResponsiveValue<BaseColorToken>;
      gradient?: never;
    }
) &
  Pick<BorderProps, 'borderColor' | 'borderRadiusLevel' | 'borderStyle' | 'borderWidth'> &
  DisplayProps &
  SpacingProps &
  SizingProps;

export const withPaperVariation = withVariation<PaperProps>()();
