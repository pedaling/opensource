import type { FlexboxProps, ResponsiveValue, SizingProps } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

export type SpaceProps = {
  visible?: ResponsiveValue<boolean>;
} & (
  | (Pick<FlexboxProps, 'flex'> & {
      width?: never;
      height?: never;
    })
  | (Pick<SizingProps, 'width'> & {
      flex?: never;
      height?: never;
    })
  | (Pick<SizingProps, 'height'> & {
      flex?: never;
      width?: never;
    })
);

export const withSpaceVariation = withVariation<SpaceProps>()(
  propVariant({
    props: [
      {
        name: 'visible',
        responsive: true,
        default: true,
      },
    ],
    variants: {
      true: {
        display: 'flex',
      },
      false: {
        display: 'none',
      },
    } as const,
  })
);
