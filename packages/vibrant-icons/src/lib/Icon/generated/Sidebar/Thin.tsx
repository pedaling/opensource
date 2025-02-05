import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'sidebar-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M22.6 3.4a.25.25 0 0 1 .25.25v16.7a.25.25 0 0 1-.25.25H1.4a.25.25 0 0 1-.25-.25V3.65a.25.25 0 0 1 .25-.25zm-1.45 15.5h-10.3V5.1h10.3zM2.85 5.1h6.3v13.8h-6.3z"
      clipRule="evenodd"
    />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'SidebarThin';
