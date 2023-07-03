import type { Ref } from 'react';
import type {
  BorderSystemProps,
  OverflowSystemProps,
  ReactElementChildren,
  ResponsiveValue,
  SizingSystemProps,
} from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

export type RatioProps = Pick<SizingSystemProps, 'maxWidth' | 'minWidth' | 'width'> &
  Pick<BorderSystemProps, 'borderRadiusLevel'> &
  OverflowSystemProps & {
    ratio: ResponsiveValue<number>;
    children: ReactElementChildren;
    ref?: Ref<any>;
    testId?: string;
  };

export const withRatioVariation = withVariation<RatioProps>('Ratio')(
  propVariant({
    props: [{ name: 'ratio', responsive: true }],
    variants: ({ ratio }) => ({
      aspectRatio: ratio,
      paddingBottom: `${(1 / ratio) * 100}%`,
    }),
  })
);
