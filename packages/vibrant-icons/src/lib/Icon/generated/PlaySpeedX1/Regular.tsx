import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'playspeedx1',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M13.75 5.75 15.9 3.6c.1-.1.1-.25.05-.35L14.5 1.8c-.1-.1-.25-.1-.35 0L12 4 9.85 1.85c-.1-.1-.25-.1-.35 0l-1.4 1.4c-.1.1-.1.25-.05.35l2.15 2.15L8.05 7.9c-.1.1-.1.25 0 .35l1.4 1.4c.1.1.25.1.35 0L12 7.5l2.15 2.15c.1.1.25.1.35 0l1.4-1.4c.1-.1.1-.25 0-.35l-2.15-2.15Zm-7.5 9.65L4.3 16.75v-2.1l1.95-1.4h2.3v8.45h-2.3v-6.3Zm7.45 2.15c0-2.7 1.35-4.4 3.5-4.4s3.5 1.7 3.5 4.35c0 2.7-1.3 4.4-3.5 4.4s-3.5-1.7-3.5-4.35Zm4.7 0c0-1.6-.4-2.45-1.15-2.45-.75 0-1.15.85-1.15 2.45S16.5 20 17.25 20c.7 0 1.15-.9 1.15-2.45Zm-8.4 3.2c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1-.65 0-1.1-.45-1.1-1.1Z" />
  </Svg>
);

Regular.iconType = 'Regular';
