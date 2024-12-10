import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'like-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M22 15c0 3.85-3.15 7-7 7H8.25c-.15 0-.25-.1-.25-.25V9.85c0-.15.1-.35.25-.4.15-.1.3-.25.5-.35 2.05-1.45 3.45-3.4 4-5.85C13 2.1 13.55 1 14.9 1c2.2 0 2.2 2.4 1.75 3.95-.25.9-.9 3.05-.95 3.05h3.8c1.4 0 2.5 1.1 2.5 2.5zM5.25 10.25h-3c-.15 0-.25.1-.25.25v11.25c0 .15.1.25.25.25h3c.15 0 .25-.1.25-.25V10.5c0-.15-.1-.25-.25-.25" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'LikeFill';
