import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'video-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M2.6 21.6a.2.2 0 0 1-.2-.2V2.6c0-.11.09-.2.2-.2h18.8c.11 0 .2.09.2.2v18.8a.2.2 0 0 1-.2.2zm1.5-1.7h15.8V4.1H4.1zM9.65 8.448a.1.1 0 0 1 .152-.085l5.774 3.552a.1.1 0 0 1 0 .17l-5.774 3.553a.1.1 0 0 1-.152-.085z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'VideoThin';
