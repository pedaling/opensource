import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alignverticalbottom-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M14.25 18.6c-.606 0-1.1-.494-1.1-1.1V9c0-.607.494-1.1 1.1-1.1h4c.607 0 1.1.493 1.1 1.1v8.5c0 .606-.493 1.1-1.1 1.1zm2.9-2.2v-6.3h-1.8v6.3zm-11.4 2.2c-.606 0-1.1-.494-1.1-1.1v-14c0-.607.494-1.1 1.1-1.1h4c.607 0 1.1.493 1.1 1.1v14c0 .606-.493 1.1-1.1 1.1zm2.9-2.2V4.6h-1.8v11.8zm14.45 4H.9v1.7h22.2z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'AlignVerticalBottomRegular';
