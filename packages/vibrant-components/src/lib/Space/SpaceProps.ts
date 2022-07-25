import type { DisplayProps, FlexboxProps, SizingProps } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';

export type SpaceProps = Pick<DisplayProps, 'hidden'> &
  (
    | (Pick<FlexboxProps, 'flex'> & {
        width?: never;
        height?: never;
      })
    | (Pick<SizingProps, 'height'> & {
        flex?: never;
        width?: never;
      })
    | (Pick<SizingProps, 'width'> & {
        flex?: never;
        height?: never;
      })
  );

export const withSpaceVariation = withVariation<SpaceProps>()();
