import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'playrewind5sec',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12.6 1.5c-1.95-.1-3.75.3-5.35 1.15l-.95-1.5C6.2 1 5.95 1 5.85 1.2l-2 4.35c-.1.15.05.35.25.35l4.8.05c.2 0 .3-.2.2-.4L8.2 4.1c1.6-.8 3.45-1.1 5.4-.75C17.4 4 20.3 7.2 20.75 11c.55 5.25-3.55 9.7-8.7 9.7-4.75 0-8.6-3.8-8.75-8.5-.05-.1-.15-.2-.3-.2H1.75c-.15 0-.25.1-.25.25.15 5.7 4.8 10.25 10.5 10.25 5.95 0 10.8-5 10.5-11.05-.25-5.3-4.6-9.65-9.9-9.95Z" />
    <Svg.Path d="M9.35 13.65v-.1h1.55v.05c.1.4.5.75 1.05.75.65 0 1.1-.45 1.1-1.05 0-.6-.45-1.05-1.1-1.05-.3 0-.55.1-.7.2-.15.1-.25.2-.3.35h-1.5l.3-4h4.5v1.3H11.1l-.15 1.7H11c.25-.45.8-.75 1.5-.75 1.25 0 2.2.9 2.2 2.15 0 1.45-1.1 2.4-2.7 2.4-1.6.05-2.55-.8-2.65-1.95Z" />
  </Svg>
);

Thin.iconType = 'Thin';
