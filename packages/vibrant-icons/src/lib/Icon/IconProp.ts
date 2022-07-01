import type { BoxProps, ResponsiveValue } from '@vibrant-ui/core';

export type IconProps = Pick<BoxProps, 'fill'> & {
  size?: ResponsiveValue<number>;
};
