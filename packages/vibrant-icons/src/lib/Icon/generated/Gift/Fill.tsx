import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'gift-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M13.25 22h8.5c.15 0 .25-.1.25-.25v-7h-8.75zm-2.5-17h-8.5C2.1 5 2 5.1 2 5.25v7h8.75zM22 12.25v-7c0-.15-.1-.25-.25-.25h-8.5v7.25zm-20 2.5v7c0 .15.1.25.25.25h8.5v-7.25zm13.95-11.9c.05-.1.05-.25 0-.35L14.5 1.05c-.1-.1-.25-.1-.35 0L12 3.25 9.85 1.1c-.1-.1-.25-.1-.35-.05L8.05 2.5c-.1.1-.1.25 0 .35l1.45 1.4h5z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'GiftFill';
