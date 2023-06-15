import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'laptop-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M427 110c0-20.4-16.6-37-37-37H90c-20.4 0-37 16.6-37 37v227h374V110Zm-34 193H87V107h306v196Zm74 60v7c0 20.4-16.6 37-37 37H50c-20.4 0-37-16.6-37-37v-7h137.2c4.82 9.18 14.34 15 24.8 15h130c10.46 0 19.99-5.82 24.8-15H467Z" />
  </Svg>
);

Thin.iconType = 'Thin';
