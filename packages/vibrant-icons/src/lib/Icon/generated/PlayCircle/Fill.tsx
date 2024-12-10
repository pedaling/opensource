import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'playcircle-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M19.848 4.15A11.03 11.03 0 0 0 12 .9a11.03 11.03 0 0 0-7.85 3.25A11.03 11.03 0 0 0 .9 12c0 2.965 1.154 5.752 3.25 7.848A11.03 11.03 0 0 0 12 23.1c2.965 0 5.752-1.155 7.848-3.252A11.03 11.03 0 0 0 23.1 12c0-2.965-1.155-5.752-3.252-7.85M9.212 16.504a.1.1 0 0 1-.152-.085V7.582a.1.1 0 0 1 .152-.085l7.18 4.418a.1.1 0 0 1 0 .17z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'PlayCircleFill';
