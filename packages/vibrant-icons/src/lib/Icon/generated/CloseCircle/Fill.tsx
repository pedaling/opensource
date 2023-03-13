import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg data-testid={testId} viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm4.95 14.2c.1.1.1.25 0 .35l-1.4 1.4c-.1.1-.25.1-.35 0l-3.2-3.2-3.2 3.2c-.1.1-.25.1-.35 0l-1.4-1.4c-.1-.1-.1-.25 0-.35l3.2-3.2-3.2-3.2c-.1-.1-.1-.25 0-.35l1.4-1.4c.1-.1.25-.1.35 0l3.2 3.2 3.2-3.2c.1-.1.25-.1.35 0l1.4 1.4c.1.1.1.25 0 .35l-3.2 3.2 3.2 3.2Z" />
  </Svg>
);

Fill.iconType = 'Fill';
