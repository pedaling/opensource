import type { FC } from 'react';
import type { BoxProps, ResponsiveValue, SpacingSystemProps } from '@vibrant-ui/core';

export type IconComponent<Props, Type extends 'Fill' | 'Regular' | 'Thin'> = FC<Props> & {
  iconType: Type;
};

export type IconProps = Pick<BoxProps, 'fill'> &
  SpacingSystemProps & {
    size?: ResponsiveValue<number>;
    testId?: string;
  };
