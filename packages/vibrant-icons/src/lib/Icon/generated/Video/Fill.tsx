import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'video-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M2.35 2.15a.2.2 0 0 0-.2.2v19.3c0 .11.09.2.2.2h19.3a.2.2 0 0 0 .2-.2V2.35a.2.2 0 0 0-.2-.2zm6.863 14.353a.1.1 0 0 1-.153-.085V7.583a.1.1 0 0 1 .153-.085l7.179 4.417a.1.1 0 0 1 0 .17z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'VideoFill';
