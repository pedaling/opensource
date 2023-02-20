import { propVariant } from '@vibrant-ui/core';
import { isDefined } from '@vibrant-ui/utils';
import type { ResponsiveValue } from '../../types';
import type { BorderSystemProps, MediaSystemProps, SizingSystemProps } from '../props';
import { withVariation } from '../withVariation';

type Extension = 'jpg' | 'png';

type ImageProps = {
  src: ResponsiveValue<string>;
  ref?: any;
  alt?: string;
  loading?: 'eager' | 'lazy';
  extension?: ResponsiveValue<Extension>;
} & SizingSystemProps &
  MediaSystemProps &
  BorderSystemProps;

export const withImageVariation = withVariation<ImageProps>('Image')(
  propVariant({
    props: [
      {
        name: 'src',
        responsive: true,
      },
      {
        name: 'extension',
        responsive: true,
      },
    ],
    variants: ({ src, extension }) => ({
      src: [src, extension].filter(isDefined).join('.'),
    }),
  })
);
