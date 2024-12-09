import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'bold-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M5.25 2.5h7.85c1.7 0 3.05.45 4.05 1.3 1 .9 1.5 1.85 1.5 3.35 0 .75-.15 1.15-.4 1.75s-.6 1.1-1.1 1.5c-.45.4-1.05.7-1.75.9v.1c.9.1 1.65.4 2.3.8s1.15 1 1.5 1.7.55 1.25.55 2.2c0 1.15-.3 1.95-.85 2.75q-.825 1.275-2.4 1.95c-1.05.45-2.25.65-3.7.65H5.25zm2.65 8.1h3.3c1.1 0 2-.1 2.7-.35s1.2-.6 1.55-1.05.5-.85.5-1.55c0-.95-.3-1.45-.85-2-.6-.55-1.4-.8-2.45-.8h-4.7v5.75zm0 8.6h3.7c1.9 0 3.3-.25 4.15-.8.85-.5 1.25-1.1 1.25-2.25 0-.75-.15-1.15-.5-1.65-.3-.55-.8-.95-1.4-1.2-.6-.3-1.35-.4-2.25-.4h-5v6.3z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'BoldRegular';
