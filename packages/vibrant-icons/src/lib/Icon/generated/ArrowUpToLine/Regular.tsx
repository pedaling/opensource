import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'arrowuptoline-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m19.95 13.2-1.45 1.4c-.1.1-.25.1-.35 0l-4.9-4.9v12.05c0 .15-.1.25-.25.25h-2c-.15 0-.25-.1-.25-.25V9.7l-4.9 4.9c-.1.1-.25.1-.35 0l-1.4-1.4c-.1-.1-.1-.25 0-.35l7.7-7.8c.1-.1.25-.1.35 0l7.75 7.75c.1.1.1.3.05.4M4 2.25A.25.25 0 0 1 4.25 2h15.5a.25.25 0 0 1 .25.25v2a.25.25 0 0 1-.25.25H4.25A.25.25 0 0 1 4 4.25z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'ArrowUpToLineRegular';
