import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg data-testid={testId} viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="m4.05 13.8 1.4-1.4c.1-.1.25-.1.35 0l4.9 4.9V2.25c.05-.15.15-.25.3-.25h2c.15 0 .25.1.25.25V17.3l4.9-4.9c.1-.1.25-.1.35 0l1.4 1.4c.1.1.1.25 0 .35l-7.7 7.8c-.1.1-.25.1-.35 0l-7.8-7.75c-.05-.1-.05-.3 0-.4Z" />
  </Svg>
);

Regular.iconType = 'Regular';
