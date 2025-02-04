import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'sidebar-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      clipRule="evenodd"
      d="m22.5999 3.3999c.1381 0 .25.11193.25.25v16.7c0 .1381-.1119.25-.25.25h-21.2c-.13807 0-.25-.1119-.25-.25v-16.7c0-.13807.11193-.25.25-.25zm-1.45 15.5h-10.3v-13.8h10.3zm-18.3-13.8h6.3v13.8h-6.3z"
      fillRule="evenodd"
    />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'SidebarThin';
