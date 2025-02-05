import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'sidebar-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M22.85 3.15a.25.25 0 0 1 .25.25v17.2a.25.25 0 0 1-.25.25H1.15a.25.25 0 0 1-.25-.25V3.4a.25.25 0 0 1 .25-.25zm-1.95 15.5h-9.8V5.35h9.8zM3.1 5.35h5.8v13.3H3.1z"
      clipRule="evenodd"
    />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'SidebarRegular';
