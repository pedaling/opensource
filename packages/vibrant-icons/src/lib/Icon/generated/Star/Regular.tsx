import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'star-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m12 6.35 1.25 2.55.45.95c.05.15.2.25.4.25l1.05.15 2.8.4-2.05 2-.75.75c-.1.1-.15.25-.15.4l.2 1.05.5 2.8-2.5-1.3-.95-.5q-.225-.15-.45 0l-.95.5-2.5 1.3.5-2.8.2-1.05c.05-.15-.05-.35-.15-.45l-.75-.75-2.05-2 2.8-.4 1.05-.15c.15 0 .3-.15.4-.25l.45-.95zM12 1c-.1 0-.2.05-.25.15L8.6 7.55c-.05.15-.2.25-.4.25l-7 1.05c-.2.05-.3.3-.15.45l5.1 5c.1.1.15.3.15.45l-1.2 7c-.05.15.1.3.25.3.05 0 .1 0 .1-.05l6.3-3.3q.225-.15.45 0l6.3 3.25c.05 0 .1.05.1.05.15 0 .3-.15.25-.3l-1.2-7c-.05-.15.05-.35.15-.45l5.1-5c.15-.15.05-.4-.15-.45L15.7 7.75c-.15 0-.3-.15-.4-.25l-3.05-6.35A.28.28 0 0 0 12 1" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'StarRegular';
