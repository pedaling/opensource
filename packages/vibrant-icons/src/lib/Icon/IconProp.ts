import type { FC } from 'react';
import type { BoxProps, ResponsiveValue } from '@vibrant-ui/core';

export type IconComponent<Props, Type extends 'Fill' | 'Regular' | 'Thin'> = FC<Props> & {
  iconType: Type;
};

export type IconProps = Pick<BoxProps, 'fill'> & {
  size?: ResponsiveValue<number>;
  testId?: string;
};
