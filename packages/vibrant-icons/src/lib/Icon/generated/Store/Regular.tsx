import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.75 2H2.25C2.1 2 2 2.1 2 2.25v19.5c0 .15.1.25.25.25h19.5c.15 0 .25-.1.25-.25V2.25c0-.15-.1-.25-.25-.25ZM19.5 4.5v3.7c0 1-.8 1.8-1.85 1.8-1 0-1.8-.8-1.8-1.8V4.5h3.65Zm-5.65 0v3.7c0 1-.8 1.8-1.85 1.8-1 0-1.8-.8-1.8-1.8V4.5h3.65Zm-9.35 0h3.65v3.7c0 1-.8 1.8-1.85 1.8-1 0-1.8-.8-1.8-1.8V4.5Zm8.75 15v-4.25c0-.15-.1-.25-.25-.25h-2c-.15 0-.25.1-.25.25v4.25H4.5v-7.95c.55.3 1.15.45 1.8.45 1.15 0 2.15-.5 2.85-1.3.7.8 1.75 1.3 2.85 1.3s2.15-.5 2.85-1.25c.7.8 1.7 1.25 2.85 1.25.65 0 1.3-.15 1.85-.45v7.95h-6.3Z" />
  </Svg>
);

Regular.iconType = 'Regular';
