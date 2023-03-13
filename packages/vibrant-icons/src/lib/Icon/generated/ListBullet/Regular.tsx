import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg data-testid={testId} viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M4 6.75c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2ZM8.75 6h13c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25h-13c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25ZM4 14c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm4.75-.75h13c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25h-13c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25Zm-4.75 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm4.75-.75h13c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25h-13c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25Z" />
  </Svg>
);

Regular.iconType = 'Regular';
