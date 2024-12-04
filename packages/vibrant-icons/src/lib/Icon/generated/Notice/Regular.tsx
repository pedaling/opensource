import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'notice-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M4.8999 23.0994v-7.111l-3.921998-.8915-.078-.0175V7.16941l.078-.0175L20.8999 2.62441V.899414h2.2V21.3494h-2.2v-1.725l-9.8-2.227v5.702h-6.2Zm4-2.2v-4.002l-1.8-.409v4.411h1.8Zm12-3.5305V4.87991l-17.8 4.046v4.39699l17.8 4.046Z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'NoticeRegular';
