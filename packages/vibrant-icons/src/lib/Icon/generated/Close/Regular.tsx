import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'close',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m13.75 12 6.35-6.35c.1-.1.1-.25 0-.35l-1.4-1.4c-.1-.1-.25-.1-.35 0L12 10.25l-6.35-6.4c-.1-.1-.25-.1-.35 0l-1.4 1.4c-.1.1-.1.25 0 .35l6.35 6.4-6.4 6.35c-.1.1-.1.25 0 .35l1.4 1.4c.1.1.25.1.35 0l6.4-6.35 6.35 6.35c.1.1.25.1.35 0l1.4-1.4c.1-.1.1-.25 0-.35L13.75 12Z" />
  </Svg>
);

Regular.iconType = 'Regular';
