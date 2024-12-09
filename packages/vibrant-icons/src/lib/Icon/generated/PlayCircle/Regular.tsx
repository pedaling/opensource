import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'playcircle-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 23.1a11.03 11.03 0 0 1-7.85-3.252A11.03 11.03 0 0 1 .9 12c0-2.965 1.154-5.752 3.25-7.85A11.03 11.03 0 0 1 12 .9c2.965 0 5.752 1.154 7.848 3.25A11.03 11.03 0 0 1 23.1 12c0 2.965-1.155 5.752-3.252 7.848A11.03 11.03 0 0 1 12 23.1m0-20c-4.908 0-8.9 3.992-8.9 8.9 0 4.907 3.992 8.9 8.9 8.9 4.907 0 8.9-3.993 8.9-8.9 0-4.908-3.993-8.9-8.9-8.9M9.4 8a.1.1 0 0 1 .152-.085l6.5 4a.1.1 0 0 1 0 .17l-6.5 4A.1.1 0 0 1 9.4 16z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'PlayCircleRegular';
