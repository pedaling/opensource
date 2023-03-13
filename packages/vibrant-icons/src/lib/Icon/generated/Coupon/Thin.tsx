import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg data-testid={testId} viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M20.75 5.25V8.7c-1.2.65-2 1.9-2 3.3s.8 2.7 2 3.3v3.45H3.25V15.3c1.2-.65 2-1.9 2-3.3 0-1.45-.8-2.7-2-3.3V5.25h17.5Zm1.5-1.75H1.75c-.15 0-.25.1-.25.25v6c0 .15.1.25.25.25 1 .1 1.75.95 1.75 2s-.75 1.85-1.75 2c-.15 0-.25.1-.25.25v6c0 .15.1.25.25.25h20.5c.15 0 .25-.1.25-.25v-6c0-.15-.1-.25-.25-.25-1-.1-1.75-.95-1.75-2s.75-1.85 1.75-2c.15 0 .25-.1.25-.25v-6c0-.15-.1-.25-.25-.25Z" />
  </Svg>
);

Thin.iconType = 'Thin';
