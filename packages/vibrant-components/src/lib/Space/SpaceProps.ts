import type { DisplaySystemProps, FlexboxSystemProps, SizingSystemProps } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';

export type SpaceProps = Pick<DisplaySystemProps, 'hidden'> &
  (
    | (Pick<FlexboxSystemProps, 'flex'> & {
        width?: never;
        height?: never;
      })
    | (Pick<SizingSystemProps, 'height'> & {
        flex?: never;
        width?: never;
      })
    | (Pick<SizingSystemProps, 'width'> & {
        flex?: never;
        height?: never;
      })
  );

export const withSpaceVariation = withVariation<SpaceProps>('Space')();
