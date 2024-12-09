import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'flash-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M11.945 10.62h5l-4.66 7.115V13.63a.25.25 0 0 0-.25-.25h-5l4.66-7.115v4.105a.25.25 0 0 0 .25.25M13.19.985a.24.24 0 0 0-.205.115l-8.93 13.645a.25.25 0 0 0 .205.385h6.295v7.635a.25.25 0 0 0 .373.22.24.24 0 0 0 .087-.085l8.93-13.645a.25.25 0 0 0-.205-.385h-6.295V1.235a.25.25 0 0 0-.255-.25" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'FlashThin';
