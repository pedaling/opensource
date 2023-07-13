import type { Ref } from 'react';
import type {
  InteractionSystemProps,
  ReactElementChild,
  ResponsiveValue,
  SizingSystemProps,
  SpacingSystemProps,
} from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

type StackedPortalProps = SizingSystemProps &
  InteractionSystemProps & {
    id: string;
    order: number;
    ref?: Ref<any>;
    children: ({
      layoutStyle,
    }: {
      layoutStyle: Pick<SpacingSystemProps, 'pb' | 'pl' | 'pr' | 'pt'> & {
        width: '100%';
        height: '100%';
      };
    }) => ReactElementChild;
    safeAreaMode?: 'margin' | 'none' | 'padding';
    onMount?: () => void;
  } & {
    position: ResponsiveValue<'bottom' | 'top'>;
    offset?: ResponsiveValue<number>;
    left?: ResponsiveValue<number>;
    right?: ResponsiveValue<number>;
    zIndex?: ResponsiveValue<number>;
    duration?: number;
    hidden?: boolean;
    testId?: string;
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
