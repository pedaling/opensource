import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg data-testid={testId} viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="m20.6 4.4-1.4 1.4c-.1.1-.1.25 0 .35 1.45 1.5 2.3 3.6 2.3 5.85 0 2.25-.9 4.3-2.3 5.85-.1.1-.1.25 0 .35l1.4 1.4c.1.1.25.1.35 0 1.9-2 3.05-4.65 3.05-7.6 0-2.95-1.15-5.6-3.05-7.6-.1-.1-.25-.1-.35 0Z" />
    <Svg.Path d="m17.75 7.25-1.4 1.4c-.1.1-.1.25 0 .35.7.8 1.15 1.85 1.15 3s-.45 2.2-1.15 3c-.1.1-.1.25 0 .35l1.4 1.4c.1.1.25.1.35 0C19.3 15.5 20 13.85 20 12s-.7-3.5-1.85-4.75c-.1-.1-.3-.1-.4 0Zm-3.5-5.75c-.05 0-.1 0-.15.05L8.15 5.9c-.1.05-.2.1-.3.1h-6.6C1.1 6 1 6.1 1 6.25v11.5c0 .15.1.25.25.25h6.6c.1 0 .2.05.3.1l6 4.35c.05.05.1.05.15.05.15 0 .25-.1.25-.25V1.75c-.05-.15-.15-.25-.3-.25Z" />
  </Svg>
);

Fill.iconType = 'Fill';
