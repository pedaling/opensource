import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="m15.65 2.95-.9-.9c-.05-.05-.25-.05-.3.05L12 4.5 9.55 2.05C9.5 2 9.3 2 9.2 2.1l-.9.9c-.1.1-.1.25 0 .35l2.45 2.45L8.3 8.25c-.1.1-.1.25 0 .35l.9.9c.1.1.25.1.35 0L12 7l2.45 2.45c.1.1.25.1.35 0l.9-.9c.1-.1.1-.25 0-.35l-2.45-2.45L15.7 3.3c.05-.05.05-.25-.05-.35ZM3.3 17.55c0-2.7 1.25-4.4 3.35-4.4S10 14.8 10 17.5c0 2.7-1.25 4.4-3.35 4.4S3.3 20.2 3.3 17.55Zm4.7 0c0-1.75-.45-2.7-1.35-2.7-.85 0-1.35.95-1.35 2.7 0 1.7.5 2.7 1.35 2.7.85-.05 1.35-1 1.35-2.7Zm2.95 3.2c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.45-1.1-1.1Zm3.65-1.45h1.55c.1 0 .15.05.2.15.15.45.6.8 1.2.8.75 0 1.25-.55 1.25-1.3s-.55-1.3-1.25-1.3c-.35 0-.6.1-.85.3-.15.1-.25.2-.3.35-.05.05-.1.1-.15.1h-1.5c-.05 0-.1-.05-.1-.1l.3-4.85c0-.05.05-.1.1-.1h5.05c.05 0 .1.05.1.1v1.45c0 .05-.05.1-.1.1h-3.6l-.15 2.15h.05c.3-.55.95-.95 1.75-.95 1.45 0 2.55 1.15 2.55 2.7 0 1.8-1.25 3-3.15 3-1.75 0-2.9-1.1-3.05-2.5 0-.05.05-.1.1-.1Z" />
  </Svg>
);

Thin.iconType = 'Thin';
