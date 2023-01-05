import type { Ref } from 'react';
import type { ReactElementChildren, ResponsiveValue, SizingSystemProps } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

export type RatioProps = Pick<SizingSystemProps, 'maxWidth' | 'minWidth' | 'width'> & {
  ratio: ResponsiveValue<number>;
  children: ReactElementChildren;
  ref?: Ref<any>;
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
