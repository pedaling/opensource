import type { FlexboxProps, ResponsiveValue, SizingProps } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';

export type SpaceProps = {
  hidden?: ResponsiveValue<boolean>;
} & (
  | (Pick<FlexboxProps, 'flex'> & {
      width?: never;
      height?: never;
    })
  | (Pick<SizingProps, 'width'> & {
      flex?: never;
      height?: never;
    })
  | (Pick<SizingProps, 'height'> & {
      flex?: never;
      width?: never;
    })
);

export const withSpaceVariation = withVariation<SpaceProps>()();
