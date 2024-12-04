import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'arrowright-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.95 11.8 14.2 4.05c-.1-.1-.25-.1-.35 0l-.9.9c-.1.1-.1.25 0 .35l5.8 5.8H2.25c-.15 0-.25.1-.25.25v1.25c0 .15.1.25.25.25h16.5l-5.8 5.85c-.1.1-.1.25 0 .35l.9.9c.1.1.25.1.35 0l7.75-7.75c.05-.1.05-.3 0-.4Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'ArrowRightThin';
