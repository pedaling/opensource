import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg data-testid={testId} viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M4.5 19.5v-15h15v6.25c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25v-8.5c0-.15-.1-.25-.25-.25H2.25C2.1 2 2 2.1 2 2.25v19.5c0 .15.1.25.25.25h8.5c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25H4.5Z" />
    <Svg.Path d="M19.5 16v3.5H16V16h3.5Zm2.25-2.5h-8c-.15 0-.25.1-.25.25v8c0 .15.1.25.25.25h8c.15 0 .25-.1.25-.25v-8c0-.15-.1-.25-.25-.25Z" />
  </Svg>
);

Regular.iconType = 'Regular';
