import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'sidebar-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      clipRule="evenodd"
      d="m22.8499 3.1499c.1381 0 .25.11193.25.25v17.2c0 .1381-.1119.25-.25.25h-21.7c-.13807 0-.249998-.1119-.249998-.25v-17.2c0-.13807.111928-.25.249998-.25zm-1.95 15.5h-9.8v-13.3h9.8zm-17.8-13.3h5.8v13.3h-5.8z"
      fillRule="evenodd"
    />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'SidebarRegular';
