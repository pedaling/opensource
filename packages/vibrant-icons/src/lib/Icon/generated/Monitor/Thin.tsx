import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'monitor-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M8.4,20.9v-1.7h1.8v-1.8H4c-1,0-1.8-0.8-1.8-1.9V5C2.2,4,3,3.2,4,3.2h16c1,0,1.9,0.8,1.9,1.8v10.5c0,1-0.8,1.9-1.9,1.9h-6.1 v1.8h1.7v1.7H8.4L8.4,20.9z M3.8,15.6h16.3V4.8H3.8V15.6z" />
  </Svg>
);

Thin.iconType = 'Thin';
