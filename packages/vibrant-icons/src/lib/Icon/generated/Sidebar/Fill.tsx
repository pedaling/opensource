import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'sidebar-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      clipRule="evenodd"
      d="m.899902 3.3999c0-.13807.111928-.25.249998-.25h21.7c.1381 0 .25.11193.25.25v17.2c0 .1381-.1119.25-.25.25h-21.7c-.13807 0-.249998-.1119-.249998-.25zm19.999998 15.25h-10.8999v-13.3h10.8999z"
      fillRule="evenodd"
    />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'SidebarFill';
