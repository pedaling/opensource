import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'chevronup-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m12 8.045 8.2 8.2c.1.1.25.1.35 0l.9-.9c.1-.1.1-.25 0-.35l-9.25-9.25c-.1-.1-.25-.1-.35 0l-9.25 9.25c-.1.1-.1.25 0 .35l.9.9c.1.1.25.1.35 0l8.15-8.2Z" />
  </Svg>
);

Thin.iconType = 'Thin';
