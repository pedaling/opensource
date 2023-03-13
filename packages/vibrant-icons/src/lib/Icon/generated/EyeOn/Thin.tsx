import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M2.5 13c.15 0 .25-.1.25-.25C2.9 8.05 7 4.25 12 4.25s9.1 3.8 9.25 8.5c0 .15.1.25.25.25h1.25c.15 0 .25-.1.25-.25-.15-5.7-5-10.25-11-10.25S1.15 7.05 1 12.75c0 .15.1.25.25.25H2.5Z" />
    <Svg.Path d="M17.4 11.85c-.05-.15-.2-.15-.35-.1l-1.1.6c-.1.05-.15.2-.1.35.25.55.4 1.2.4 1.85 0 2.35-2.1 4.35-4.45 4.2-2.45-.1-4.35-2.3-4-4.85.25-1.6 1.4-2.9 2.9-3.4.8-.25 1.55-.25 2.25-.1.15.05.25-.05.3-.15l.35-1.2c.05-.15-.05-.3-.2-.3-.85-.2-1.8-.25-2.8 0-2.4.6-4.3 2.65-4.55 5.1-.45 3.7 2.5 6.85 6.1 6.75 3.15-.1 5.8-2.75 5.85-5.9 0-1.1-.2-2-.6-2.85Z" />
  </Svg>
);

Thin.iconType = 'Thin';
