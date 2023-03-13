import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg data-testid={testId} viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M8.5 10.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z" />
    <Svg.Path d="M21.75 2H2.25C2.1 2 2 2.1 2 2.25v19.5c0 .15.1.25.25.25h19.5c.15 0 .25-.1.25-.25V2.25c0-.15-.1-.25-.25-.25ZM4.5 4.5h15v9.2l-4.35-4.35c-.1-.1-.2-.1-.3-.05L4.5 16.8V4.5Zm.05 15 10.25-7.4 4.7 4.7v2.7H4.55Z" />
  </Svg>
);

Regular.iconType = 'Regular';
