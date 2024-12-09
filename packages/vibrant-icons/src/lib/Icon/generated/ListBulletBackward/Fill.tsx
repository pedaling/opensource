import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'listbulletbackward-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M22 4.75a2 2 0 1 0-4 0 2 2 0 0 0 4 0M15.25 3.5h-13a.25.25 0 0 0-.25.25v2c0 .138.112.25.25.25h13a.25.25 0 0 0 .25-.25v-2a.25.25 0 0 0-.25-.25M22 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-6.75-1.25h-13A.25.25 0 0 0 2 11v2c0 .138.112.25.25.25h13a.25.25 0 0 0 .25-.25v-2a.25.25 0 0 0-.25-.25m6.75 8.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0M15.25 18h-13a.25.25 0 0 0-.25.25v2c0 .138.112.25.25.25h13a.25.25 0 0 0 .25-.25v-2a.25.25 0 0 0-.25-.25" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'ListBulletBackwardFill';
