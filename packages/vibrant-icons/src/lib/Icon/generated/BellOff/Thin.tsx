import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'belloff-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M18 17h-7.8l-1.5 1.5h12.05c.15 0 .25-.1.25-.25v-1c0-.15-.1-.25-.25-.25H19.5V7.7L18 9.15V17ZM21.95 2.8l-.7-.7c-.1-.1-.25-.1-.35 0l-2.5 2.5C17.05 2.45 14.7 1 12 1 7.9 1 4.5 4.4 4.5 8.5V17H3.25c-.15 0-.25.1-.25.25v1c0 .15.1.25.25.25h1.2L2.1 20.85c-.1.1-.1.25 0 .35l.7.7c.1.1.25.1.35 0l18.8-18.75c.05-.1.05-.25 0-.35ZM6 8.5c0-3.3 2.7-6 6-6 2.3 0 4.25 1.3 5.3 3.15L6 16.95V8.5ZM12 23a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
  </Svg>
);

Thin.iconType = 'Thin';
