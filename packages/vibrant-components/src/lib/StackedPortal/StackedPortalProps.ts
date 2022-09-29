import type { Ref } from 'react';
import type { BackgroundSystemProps, ReactElementChild, SizingSystemProps, SpacingSystemProps } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import { isDefined } from '@vibrant-ui/utils';

type StackedPortalProps = BackgroundSystemProps &
  SizingSystemProps &
  Pick<SpacingSystemProps, 'p' | 'pb' | 'pl' | 'pr' | 'pt' | 'px' | 'py'> & {
    id: string;
    order: number;
    ref?: Ref<any>;
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
