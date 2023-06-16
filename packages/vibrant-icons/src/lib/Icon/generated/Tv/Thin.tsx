import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'tv-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M7.1,20.4v-2H3.5c-1,0-1.9-0.8-1.9-1.9v-11c0-1,0.8-1.8,1.9-1.8h17c1,0,1.9,0.8,1.9,1.8v11c0,1-0.8,1.9-1.9,1.9h-3.7v2H7.1 L7.1,20.4z M3.3,16.6h17.3V5.3H3.3V16.6z" />
  </Svg>
);

Thin.iconType = 'Thin';
