import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'tablet-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M410 83H70c-20.4 0-37 16.6-37 37v240c0 20.4 16.6 37 37 37h340c20.4 0 37-16.6 37-37V120c0-20.4-16.6-37-37-37Zm3 280H67V117h346v246Zm-250-43c0-9.38 7.62-17 17-17h120c9.38 0 17 7.62 17 17s-7.62 17-17 17H180c-9.38 0-17-7.62-17-17Z" />
  </Svg>
);

Thin.iconType = 'Thin';
