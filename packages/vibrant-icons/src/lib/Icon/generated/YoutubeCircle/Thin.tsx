import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'youtubecircle-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M17.5 8.95c-.15-.55-.55-.95-1.1-1.1-1-.25-4.35-.25-4.35-.25s-3.4 0-4.4.25C7.1 8 6.65 8.45 6.5 9c-.25 1-.25 3-.25 3s0 2.05.25 3.05c.15.55.55.95 1.1 1.1 1 .25 4.35.25 4.35.25s3.4 0 4.35-.25c.55-.15.95-.55 1.1-1.1.25-1 .25-3.05.25-3.05s.1-2.05-.15-3.05m-6.75 5.15V9.85l3.65 2.1z" />
    <Svg.Path d="M12 2.75c5.1 0 9.25 4.15 9.25 9.25S17.1 21.25 12 21.25 2.75 17.1 2.75 12 6.9 2.75 12 2.75M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'YoutubeCircleThin';
