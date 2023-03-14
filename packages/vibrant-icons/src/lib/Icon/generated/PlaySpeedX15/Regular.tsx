import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'playspeedx15-regular',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M13.75 5.75 15.9 3.6c.1-.1.1-.25.05-.35L14.5 1.8c-.1-.1-.25-.1-.35 0L12 4 9.85 1.85c-.1-.1-.25-.1-.35 0l-1.4 1.4c-.1.1-.1.25-.05.35l2.15 2.15L8.05 7.9c-.1.1-.1.25 0 .35l1.4 1.4c.1.1.25.1.35 0L12 7.5l2.15 2.15c.1.1.25.1.35 0l1.4-1.4c.1-.1.1-.25 0-.35l-2.15-2.15Zm-7.9 9.65L3.9 16.75v-2.1l1.95-1.4h2.3v8.45h-2.3v-6.3Zm7.95 3.85h1.8c.1 0 .15.05.2.15.15.35.55.65 1.05.65.65 0 1.1-.45 1.1-1.15 0-.65-.45-1.1-1.1-1.1-.25 0-.5.1-.7.2-.15.1-.25.2-.3.35-.05.05-.1.1-.15.1h-1.75c-.05 0-.1-.05-.1-.1l.3-4.9c0-.05.05-.1.1-.1h5.25c.05 0 .1.05.1.1v1.65c0 .05-.05.1-.1.1h-3.6l-.1 1.9h.05c.3-.55.9-.95 1.75-.95 1.45 0 2.5 1.15 2.5 2.7 0 1.85-1.3 3.05-3.25 3.05-1.85 0-3-1.15-3.15-2.55-.05-.05 0-.1.1-.1Zm-3.75 1.5c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.45-1.1-1.1Z" />
  </Svg>
);

Regular.iconType = 'Regular';
