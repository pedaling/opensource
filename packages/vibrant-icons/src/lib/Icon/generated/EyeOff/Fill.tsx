import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg data-testid={testId} viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M20.5 12.75c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25-.05-1.8-.6-3.5-1.5-5L19.65 9.6c.5.95.8 2 .85 3.15Zm1.45-9.25L20.5 2.05c-.1-.1-.25-.1-.35 0L18 4.2c-1.7-1.05-3.8-1.7-6-1.7-6 0-10.85 4.55-11 10.25 0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25C3.65 8.45 7.4 5 12 5c1.5 0 2.95.4 4.2 1.05L13.5 8.7c-.35-.1-.75-.15-1.15-.2h-.6c-.2 0-.4 0-.6.05-.4.05-.8.15-1.2.3-.55.2-1.1.45-1.55.8-.45.35-.9.75-1.25 1.2-.15.2-.3.45-.45.7-.2.3-.35.65-.45 1-.1.25-.15.55-.2.8 0 .05-.05.15-.05.2-.1.55-.1 1.15 0 1.75.05.3.1.5.2.7l-4.15 4.15c-.05.1-.05.25 0 .35l1.45 1.45c.1.1.25.1.35 0l18.1-18.1c.05-.1.05-.25 0-.35Zm-4.55 8.35c.4.85.65 1.8.6 2.85-.1 3.1-2.65 5.65-5.7 5.8-1.05.05-2.05-.2-2.9-.6l8-8.05Z" />
  </Svg>
);

Fill.iconType = 'Fill';
