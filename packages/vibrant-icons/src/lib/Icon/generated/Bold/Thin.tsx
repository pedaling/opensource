import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'bold-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M5.85 2.5H13c1.6 0 2.9.45 3.85 1.3.95.9 1.45 1.85 1.45 3.35 0 .75-.1 1.15-.35 1.75q-.375.9-1.05 1.5t-1.65.9v.1c.85.1 1.55.4 2.2.8.6.4 1.1 1 1.45 1.7s.5 1.25.5 2.2c0 1.15-.25 1.95-.8 2.75-.55.85-1.3 1.5-2.3 1.95s-2.15.65-3.5.65H5.85zm1.75 8.35h3.7c1.4 0 3.05-.2 4.05-1.3.55-.6.8-1.25.8-2.1 0-1.05-.3-1.9-1.2-2.5-.7-.5-1.5-.7-2.35-.7h-5zm0 8.9h3.6c1.45 0 3.05.05 4.35-.7 1.9-1.1 2.15-3.4.9-5.05-.05-.05-.1-.15-.15-.2-.1-.1-.15-.2-.25-.25-.85-.8-2.1-.95-3.25-.95H7.6z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'BoldThin';
