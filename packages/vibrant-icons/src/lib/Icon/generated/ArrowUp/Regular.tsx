import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'arrowup-regular',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m19.95 10.2-1.45 1.4c-.1.1-.25.1-.35 0l-4.9-4.9v15.05c0 .15-.1.25-.25.25h-2c-.15 0-.25-.1-.25-.25V6.7l-4.9 4.9c-.1.1-.25.1-.35 0l-1.4-1.4c-.1-.1-.1-.25 0-.35l7.7-7.8c.1-.1.25-.1.35 0L19.9 9.8c.1.1.1.3.05.4Z" />
  </Svg>
);

Regular.iconType = 'Regular';
