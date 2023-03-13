import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg data-testid={testId} viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M3.75 21.25C3.75 16.7 7.45 13 12 13s8.25 3.7 8.25 8.25v.5c0 .15.1.25.25.25h1.25c.15 0 .25-.1.25-.25v-.5c0-4.3-2.7-7.95-6.5-9.35C17 10.8 18 9.05 18 7.1c.05-3.25-2.55-5.95-5.75-6.1C8.8.85 6 3.6 6 7c0 2 1 3.8 2.5 4.9C4.7 13.3 2 16.95 2 21.25v.5c0 .15.1.25.25.25H3.5c.15 0 .25-.1.25-.25v-.5ZM7.75 7c0-2.35 1.9-4.25 4.25-4.25s4.25 1.9 4.25 4.25-1.9 4.25-4.25 4.25S7.75 9.35 7.75 7Z" />
  </Svg>
);

Thin.iconType = 'Thin';
