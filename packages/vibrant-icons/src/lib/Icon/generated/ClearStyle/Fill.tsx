import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m21.95 3.05-1.45-1.4c-.1-.1-.25-.1-.35 0L19.1 2.7H2.75c-.15-.05-.25.05-.25.2v4.5c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25V5.15h5.25v6.4l-8.2 8.2c-.05.1-.05.25 0 .35l1.45 1.4c.1.1.25.1.35 0l18.1-18.1c.05-.1.05-.25 0-.35Zm-9.2 6v-3.9h3.9l-3.9 3.9Zm-2 8.45v1h-1.5c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25h5.5c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25h-1.5V15l-2.5 2.5Z" />
  </Svg>
);

Fill.iconType = 'Fill';
