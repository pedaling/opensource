import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'youtubecircle-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m10.75 14.1 3.7-2.1-3.7-2.1z" />
    <Svg.Path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1m5.5 14.05c-.15.55-.55.95-1.1 1.1-1 .25-4.35.25-4.35.25s-3.4 0-4.35-.25c-.55-.15-.95-.55-1.1-1.1-.25-1-.25-3.05-.25-3.05s0-2.05.25-3c.15-.55.55-.95 1.1-1.1 1-.25 4.4-.25 4.4-.25s3.4 0 4.35.25c.55.15.95.55 1.1 1.1.25 1 .25 3.05.25 3.05s-.05 2-.3 3" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'YoutubeCircleFill';
