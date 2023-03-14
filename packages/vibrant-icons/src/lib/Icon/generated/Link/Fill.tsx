import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'link-fill',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M16.05 9.7 9.7 16.1c-.1.1-.25.1-.35 0l-1.4-1.4c-.1-.1-.1-.25 0-.35L14.3 8c.1-.1.25-.1.35 0l1.4 1.4c.1.05.1.2 0 .3Z" />
    <Svg.Path d="M19.3 3.8c-2.5-2.05-6.2-1.75-8.5.55l-2.2 2.2c-.1.1-.1.25 0 .35L10 8.3c.1.1.25.1.35 0l2.25-2.25c1.35-1.35 3.5-1.6 5-.4 1.8 1.4 1.95 4.05.35 5.65l-2.3 2.3c-.1.1-.1.25 0 .35l1.4 1.4c.1.1.25.1.35 0l2.3-2.3c2.65-2.55 2.5-6.9-.4-9.25Zm-8 14.2c-1.6 1.6-4.2 1.45-5.65-.35-1.15-1.5-.95-3.7.4-5l2.2-2.2c.1-.1.1-.25 0-.35l-1.4-1.4c-.1-.1-.25-.1-.35 0l-2.15 2.15c-2.3 2.3-2.6 6-.55 8.5 2.35 2.9 6.7 3.05 9.25.45l2.3-2.3c.1-.1.1-.25 0-.35l-1.4-1.4c-.1-.1-.25-.1-.35 0L11.3 18Z" />
  </Svg>
);

Fill.iconType = 'Fill';
