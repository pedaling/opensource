import type { ReactElementChildren, ResponsiveValue, SizingSystemProps } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

export type RatioProps = Pick<SizingSystemProps, 'maxWidth' | 'minWidth' | 'width'> & {
  ratio: ResponsiveValue<'1:1' | '3:4' | '4:3' | '9:16' | '16:9'>;
  children: ReactElementChildren;
};

export const withRatioVariation = withVariation<RatioProps>('Ratio')(
  propVariant({
    props: [{ name: 'ratio', responsive: true }],
    variants: {
      '16:9': {
        aspectRatio: 16 / 9,
        paddingBottom: `${(4 / 3) * 100}%`,
      },
      '1:1': {
        aspectRatio: 1,
        paddingBottom: '100%',
      },
      '3:4': {
        aspectRatio: 3 / 4,
        paddingBottom: `${(4 / 3) * 100}%`,
      },
      '4:3': {
        aspectRatio: 4 / 3,
        paddingBottom: `${(3 / 4) * 100}%`,
      },
      '9:16': {
        aspectRatio: 9 / 16,
        paddingBottom: `${(16 / 9) * 100}%`,
      },
    },
  })
);
