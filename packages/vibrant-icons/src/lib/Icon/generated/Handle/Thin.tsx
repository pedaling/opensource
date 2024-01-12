import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'handle-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M5.15 12.85v-1.7h13.7v1.7H5.15Zm13.7-7.5v-1.7H5.15v1.7h13.7Zm0 15v-1.7H5.15v1.7h13.7Z" />
  </Svg>
);

Thin.iconType = 'Thin';
