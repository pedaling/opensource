import type { DisplaySystemProps, FlexboxSystemProps, SizingSystemProps } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';

export type SpaceProps = Pick<DisplaySystemProps, 'hidden'> &
  (
    | {
        flexGrow?: FlexboxSystemProps['flexGrow'];
        flexShrink?: FlexboxSystemProps['flexShrink'];
        flexBasis?: FlexboxSystemProps['flexBasis'];
        width?: never;
        height?: never;
      }
    | {
        flexGrow?: never;
        flexShrink?: never;
        flexBasis?: never;
        width?: never;
        height?: SizingSystemProps['height'];
      }
    | {
        flexGrow?: never;
        flexShrink?: never;
        flexBasis?: never;
        width?: SizingSystemProps['width'];
        height?: never;
      }
  );

export const withSpaceVariation = withVariation<SpaceProps>('Space')();
