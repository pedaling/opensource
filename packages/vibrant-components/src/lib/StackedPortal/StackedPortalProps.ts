import type { BackgroundSystemProps, ReactElementChild, SizingSystemProps } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import { isDefined } from '@vibrant-ui/utils';

type StackedPortalProps = BackgroundSystemProps &
  SizingSystemProps & {
    id: string;
    order: number;
    children?: ReactElementChild;
    safeAreaMode?: 'margin' | 'none' | 'padding';
  } & (
    | {
        top: number;
        bottom?: never;
      }
    | {
        top?: never;
        bottom: number;
      }
  ) & {
    left?: number;
    right?: number;
    zIndex?: number;
  };

export const withStackedPortalVariation = withVariation<StackedPortalProps>('StackedPortal')(
  propVariant({
    props: [
      {
        name: 'top',
      },
      {
        name: 'bottom',
      },
    ],
    variants: ({ top, bottom }) =>
      ({
        position: isDefined(top) ? 'top' : 'bottom',
        positionOffset: isDefined(top) ? top : bottom ?? 0,
      } as const),
  })
);
