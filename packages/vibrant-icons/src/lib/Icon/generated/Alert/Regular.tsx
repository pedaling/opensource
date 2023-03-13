import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'alert',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m12 6.6 7.75 12.9H4.25L12 6.6ZM12 2c-.1 0-.15.05-.2.1L.05 21.6c-.1.15 0 .4.2.4h23.5c.2 0 .3-.2.2-.4L12.2 2.1c-.05-.05-.1-.1-.2-.1Z" />
    <Svg.Path d="M11 10.85v4.4c0 .05.05.1.1.1h1.8c.05 0 .1-.05.1-.1v-4.4c0-.05-.05-.1-.1-.1h-1.8c-.05 0-.1.05-.1.1Zm1 7.65a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z" />
  </Svg>
);

Regular.iconType = 'Regular';
