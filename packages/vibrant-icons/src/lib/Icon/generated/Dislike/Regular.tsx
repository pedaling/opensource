import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'dislike-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M22 13.5V9c0-3.85-3.15-7-7-7H2.25C2.1 2 2 2.1 2 2.25v2c0 .15.1.25.25.25H5.5v6.6c-.95-.1-1.8-.1-2.45-.1h-.8c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25H3c2 0 4.05.1 5.75 1.45 1.6 1.3 2.5 3.25 2.85 5.2.15.95.7 1.85 1.5 2.35.55.35 1.1.5 1.65.5 1 0 1.95-.45 2.55-1.25s.65-1.75.6-2.7c-.05-1.05-.3-2.1-.45-3.05h2.05c1.4 0 2.5-1.1 2.5-2.5m-2.5-1.25c0 .7-.55 1.25-1.25 1.25h-3.5c-.15 0-.3.15-.25.3.5 1.7.85 3.45 1 5.25 0 .3.05.55-.05.85-.1.35-.4.6-.75.6-.1 0-.2-.05-.3-.1-.2-.1-.35-.35-.4-.65-.5-2.85-1.8-5.25-3.75-6.8-.75-.6-1.5-1-2.3-1.3L8 4.5h6.5c2.75 0 5 2.25 5 5z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'DislikeRegular';
