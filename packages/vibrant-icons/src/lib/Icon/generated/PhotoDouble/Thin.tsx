import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M7.1 8.65a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM21.75 6h-1.5v14.25H6v1.5c0 .15.1.25.25.25h15.5c.15 0 .25-.1.25-.25V6.25c0-.15-.1-.25-.25-.25Z" />
    <Svg.Path d="M18.5 2H2.25C2.1 2 2 2.1 2 2.25V18.5c0 .15.1.25.25.25h16.5V2.25c0-.15-.1-.25-.25-.25ZM17 3.75v8.75l-4.55-4.55c-.05-.05-.1-.05-.2-.05-.05 0-.1 0-.15.05l-8.35 6.2V3.75H17ZM3.75 16.3l8.4-6.2 4.9 4.9v2.05H3.75v-.75Z" />
  </Svg>
);
