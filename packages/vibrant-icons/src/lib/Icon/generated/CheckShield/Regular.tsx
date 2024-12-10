import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'checkshield-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M239.09 441.75c-.82-.45-81.71-45.52-120.42-80.26C79.48 326.32 78.01 280.5 78 280.04V98.62l1.3-.49 160.06-60.01.7-.26.7.26 159.94 60 1.3.49v181.38c0 .46-.47 46.32-40.68 81.51-41.21 36.05-119.5 79.8-120.28 80.24l-.97.54-.97-.54ZM122 278.88c.28 3.38 3.16 29.31 26.05 49.86 24.53 22.01 71.7 50.78 91.95 62.76 23.93-14.19 66.73-40.69 92.34-63.11 23.57-20.62 25.52-46.13 25.66-48.97V129.1L240.05 84.85 122 129.11z" />
    <Svg.Path d="m221.79 309.01-79.55-79.55-1.41-1.42 1.41-1.41 28.29-28.29 1.41-1.4 1.42 1.4 50.56 50.56 83.43-83.44 1.42-1.41 1.41 1.41 27.58 27.58 1.41 1.41-1.41 1.42-91.93 91.92-21.21 21.22-1.41 1.41z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'CheckShieldRegular';
