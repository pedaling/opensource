import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'keyboardarrowdown-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M22.6 3.65a.25.25 0 0 1 .25.25V14h-1.7V5.35H2.85v13.3h11.9v1.7H1.4a.25.25 0 0 1-.25-.25V3.901a.25.25 0 0 1 .25-.25z" />
    <Svg.Path d="M4.625 7.5h1.75v1.75h-1.75zm0 3.75h1.75V13h-1.75zM6.375 15h-1.75v1.75h1.75zm1.5-7.5h1.75v1.75h-1.75zm1.75 3.75h-1.75V13h1.75zM7.875 15h8.25v1.75h-8.25zm5-7.5h-1.75v1.75h1.75zm-1.75 3.75h1.75V13h-1.75zm5-3.75h-1.75v1.75h1.75zm-1.75 3.75h1.75V13h-1.75zm5-3.75h-1.75v1.75h1.75zm-1.75 3.75h1.75V13h-1.75zM19.15 15v5.25l-1.862-1.908-1.076 1.316L20 22.848l3.788-3.19-1.076-1.316-1.862 1.908V15z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'KeyboardArrowDownThin';
