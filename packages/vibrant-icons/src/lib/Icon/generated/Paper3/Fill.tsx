import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'paper3-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M20.25 2H3.75c-.15 0-.25.1-.25.25v19.5c0 .15.1.25.25.25H13.8c.15 0 .25-.05.35-.15l6.2-6.2c.1-.1.15-.2.15-.35V2.25c0-.15-.1-.25-.25-.25M8.5 8c0-.15.1-.25.25-.25h6.5c.15 0 .25.1.25.25v1c0 .15-.1.25-.25.25h-6.5c-.15 0-.25-.1-.25-.25zm0 4.5v-1c0-.15.1-.25.25-.25h6.5c.15 0 .25.1.25.25v1c0 .15-.1.25-.25.25h-6.5c-.15 0-.25-.1-.25-.25m5 7v-4.25c0-.15.1-.25.25-.25H18z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'Paper3Fill';
