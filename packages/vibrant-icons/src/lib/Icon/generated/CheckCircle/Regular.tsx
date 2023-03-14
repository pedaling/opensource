import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'checkcircle-regular',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 3.5c4.7 0 8.5 3.8 8.5 8.5s-3.8 8.5-8.5 8.5-8.5-3.8-8.5-8.5S7.3 3.5 12 3.5ZM12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Z" />
    <Svg.Path d="M6.1 11.4 7.5 10c.1-.1.25-.1.35 0l3.1 3.1 5-5c.1-.1.25-.1.35 0l1.4 1.4c.1.1.1.25 0 .35l-6.55 6.6c-.1.1-.25.1-.35 0l-4.7-4.7c-.1-.1-.1-.25 0-.35Z" />
  </Svg>
);

Regular.iconType = 'Regular';
