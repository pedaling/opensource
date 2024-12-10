import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'notice-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M5.15 22.85v-7.062l-4-.908V7.37l20-4.546V1.149h1.7V21.1h-1.7v-1.674l-10.117-2.3-.183-.04v5.764zm1.7-1.7h2.3v-4.453l-2.117-.48-.183-.042zM20.966 4.607 2.85 8.726v4.797l18.116 4.117.184.041V4.567z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'NoticeThin';
