import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'photodouble-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M7.1 8.65a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M21.75 6h-1.5v14.25H6v1.5c0 .15.1.25.25.25h15.5c.15 0 .25-.1.25-.25V6.25c0-.15-.1-.25-.25-.25" />
    <Svg.Path d="M18.5 2H2.25C2.1 2 2 2.1 2 2.25V18.5c0 .15.1.25.25.25h16.5V2.25c0-.15-.1-.25-.25-.25M17 3.75v8.75l-4.55-4.55c-.05-.05-.1-.05-.2-.05-.05 0-.1 0-.15.05l-8.35 6.2V3.75zM3.75 16.3l8.4-6.2 4.9 4.9v2.05H3.75z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'PhotoDoubleThin';
