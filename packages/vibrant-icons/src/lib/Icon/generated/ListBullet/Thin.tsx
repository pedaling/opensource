import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg data-testid={testId} viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M3.75 6.5c.95 0 1.75-.8 1.75-1.75S4.7 3 3.75 3 2 3.8 2 4.75 2.8 6.5 3.75 6.5Zm5-.9h13c.15 0 .25-.1.25-.25V4.1c0-.15-.1-.25-.25-.25h-13c-.15.05-.25.15-.25.25v1.25c0 .15.1.25.25.25Zm-5 8.15c.95 0 1.75-.8 1.75-1.75s-.8-1.75-1.75-1.75S2 11.05 2 12s.8 1.75 1.75 1.75Zm5-.85h13c.15 0 .25-.1.25-.25V11.4c0-.15-.1-.25-.25-.25h-13c-.15 0-.25.1-.25.25v1.25c0 .1.1.25.25.25Zm-5 8.1c.95 0 1.75-.8 1.75-1.75s-.8-1.75-1.75-1.75S2 18.3 2 19.25 2.8 21 3.75 21Zm5-.9h13c.15 0 .25-.1.25-.25V18.6c0-.15-.1-.25-.25-.25h-13c-.15 0-.25.1-.25.25v1.25c0 .15.1.25.25.25Z" />
  </Svg>
);

Thin.iconType = 'Thin';
