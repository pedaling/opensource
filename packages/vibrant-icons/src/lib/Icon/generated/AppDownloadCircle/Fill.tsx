import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1ZM7.4 9.4l1.05-1.05c.1-.1.25-.1.35 0l2.2 2.2V5.7c0-.15.1-.25.25-.25h1.5c.15 0 .25.1.25.25v4.8l2.2-2.2c.1-.1.25-.1.35 0l1.05 1.05c.1.1.1.25 0 .35l-4.45 4.45c-.1.1-.25.1-.35 0L7.35 9.7c-.05-.05-.05-.2.05-.3ZM17 17c0 .15-.1.25-.25.25h-9.5c-.15 0-.25-.1-.25-.25v-1.75c0-.15.1-.25.25-.25h9.5c.15 0 .25.1.25.25V17Z" />
  </Svg>
);

Fill.iconType = 'Fill';
