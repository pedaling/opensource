import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'playrewind10sec-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12.6 1.5c-1.95-.1-3.75.3-5.35 1.15l-.95-1.5C6.2 1 5.95 1 5.85 1.2l-2 4.35c-.1.15.05.35.25.35l4.8.05c.2 0 .3-.2.2-.4L8.2 4.1c1.6-.8 3.45-1.1 5.4-.75C17.4 4 20.3 7.2 20.75 11c.55 5.25-3.55 9.7-8.7 9.7-4.75 0-8.6-3.8-8.75-8.5-.05-.1-.15-.2-.3-.2H1.75c-.15 0-.25.1-.25.25.15 5.7 4.8 10.25 10.5 10.25 5.95 0 10.8-5 10.5-11.05-.25-5.3-4.6-9.65-9.9-9.95Z" />
    <Svg.Path d="m8.35 10.4-1.7 1.1v-1.45l1.7-1.15h1.7v6.7h-1.7v-5.2Zm3 1.85c0-2.15 1.1-3.45 2.85-3.45s2.85 1.35 2.85 3.45c0 2.15-1.1 3.45-2.85 3.45s-2.85-1.3-2.85-3.45Zm4 0c0-1.35-.4-2.15-1.15-2.15-.75 0-1.15.75-1.15 2.15 0 1.35.4 2.15 1.15 2.15.75 0 1.15-.8 1.15-2.15Z" />
  </Svg>
);

Thin.iconType = 'Thin';
