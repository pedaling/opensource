import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'photoadd-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M23.75 17.5H20v-3.75c0-.15-.1-.25-.25-.25h-2c-.15 0-.25.1-.25.25v3.75h-3.75c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25h3.75v3.75c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25V20h3.75c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25M13.2 9.8l2.05 2.05c.1.1.2.15.35.15H20V4H4v12.25l8.9-6.45c.1-.1.2-.05.3 0m-2.9.15q-.15.225-.3.3c-1.2.7-2.5-.55-1.75-1.75q.15-.225.3-.3c1.2-.7 2.45.55 1.75 1.75" />
    <Svg.Path d="M12.65 13.05 4 19.35V20h8v-3.75c0-.15.1-.25.25-.25h3c.2 0 .35-.25.2-.45l-2.5-2.5q-.15-.075-.3 0" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'PhotoAddFill';
