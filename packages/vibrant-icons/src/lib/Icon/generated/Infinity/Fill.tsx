import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'infinity-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M18.165 17.35c-2.25 0-3.735-1.465-5.175-2.88l-.99-.975-.99.975c-1.44 1.415-2.93 2.88-5.175 2.88C2.84 17.35.4 14.95.4 12s2.44-5.35 5.435-5.35c2.255 0 3.75 1.47 5.19 2.895l.975.96.975-.96C14.42 8.12 15.91 6.65 18.165 6.65c2.995 0 5.435 2.4 5.435 5.35s-2.44 5.35-5.435 5.35M14.53 12.9c1.415 1.395 2.35 2.25 3.635 2.25 1.785 0 3.235-1.415 3.235-3.15s-1.45-3.15-3.235-3.15c-1.29 0-2.225.86-3.65 2.265l-.9.885zM5.835 8.85C4.05 8.85 2.6 10.265 2.6 12s1.45 3.15 3.235 3.15c1.28 0 2.215-.855 3.635-2.25l.915-.9-.9-.885C8.065 9.71 7.125 8.85 5.835 8.85" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'InfinityFill';
