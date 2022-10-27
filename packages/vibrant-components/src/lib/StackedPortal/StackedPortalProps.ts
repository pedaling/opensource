import type { Ref } from 'react';
import type {
  BackgroundSystemProps,
  BorderSystemProps,
  ReactElementChild,
  ResponsiveValue,
  SizingSystemProps,
  SpacingSystemProps,
} from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

type StackedPortalProps = BackgroundSystemProps &
  SizingSystemProps &
  Pick<SpacingSystemProps, 'p' | 'pb' | 'pl' | 'pr' | 'pt' | 'px' | 'py'> &
  Pick<BorderSystemProps, 'borderRadius'> & {
    id: string;
    order: number;
    ref?: Ref<any>;
    children?: ReactElementChild;
    safeAreaMode?: 'margin' | 'none' | 'padding';
    onMount?: () => void;
  } & {
    position: ResponsiveValue<'bottom' | 'top'>;
    offset?: ResponsiveValue<number>;
    left?: ResponsiveValue<number>;
    right?: ResponsiveValue<number>;
    zIndex?: ResponsiveValue<number>;
  };

export const withStackedPortalVariation = withVariation<StackedPortalProps>('StackedPortal')(
  propVariant({
    props: [
      {
        name: 'position',
        responsive: true,
      },
      {
        name: 'offset',
        responsive: true,
      },
    ],
    variants: ({ position, offset }) =>
      ({
        position,
        positionOffset: offset ?? 0,
      } as const),
  })
);
