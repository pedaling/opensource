import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'slowmotion-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M9.65 7.776 16.222 12 9.65 16.226zM11 3.91V2.2a9.8 9.8 0 0 0-5.218 2.167l1.205 1.206A8.07 8.07 0 0 1 11 3.91M5.573 6.988 4.367 5.782A9.8 9.8 0 0 0 2.2 11.001h1.71a8.07 8.07 0 0 1 1.662-4.013m.209 12.646A9.8 9.8 0 0 0 11 21.8v-1.71a8.07 8.07 0 0 1-4.013-1.662zM2.2 13a9.8 9.8 0 0 0 2.167 5.218l1.205-1.205A8.07 8.07 0 0 1 3.911 13zM13 2.2v1.71a8.1 8.1 0 0 1 4.762 2.327A8.1 8.1 0 0 1 20.15 12a8.1 8.1 0 0 1-2.387 5.763A8.1 8.1 0 0 1 13 20.09v1.71c4.964-.502 8.85-4.706 8.85-9.8 0-5.093-3.886-9.296-8.85-9.799" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'SlowMotionThin';
