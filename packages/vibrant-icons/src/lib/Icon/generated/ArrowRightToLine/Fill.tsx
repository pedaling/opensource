import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'arrowrighttoline-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M10.8 19.95 9.4 18.5c-.1-.1-.1-.25 0-.35l4.9-4.9H2.25c-.15 0-.25-.1-.25-.25v-2c0-.15.1-.25.25-.25H14.3l-4.9-4.9c-.1-.1-.1-.25 0-.35l1.4-1.4c.1-.1.25-.1.35 0l7.75 7.75c.1.1.1.25 0 .35l-7.7 7.75c-.1.05-.3.05-.4 0m8.7-15.7a.25.25 0 0 1 .25-.25h2a.25.25 0 0 1 .25.25v15.5a.25.25 0 0 1-.25.25h-2a.25.25 0 0 1-.25-.25z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'ArrowRightToLineFill';
