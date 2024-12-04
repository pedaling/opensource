import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'playspeedx1-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m15.3354 10.2884-3.3355-3.33649-3.33545 3.33649-1.203-1.20299 3.33645-3.3355-3.33595-3.3355 1.2025-1.2025 3.33595 3.3365 3.3355-3.336 1.2025 1.2025-3.3365 3.336 3.3365 3.3355-1.203 1.20299v-.001Zm-10.87495 4.964v1.4465l1.809-1.2125h.168v6.0215h1.7605v-7.551h-1.8355l-1.902 1.2955Zm6.49895 4.543c-.507 0-.9045.397-.9045.904s.3975.91.9045.91c.507 0 .9095-.3995.9095-.91s-.3995-.904-.9095-.904Zm8.596-2.071v.0105c0 1.1915-.2985 2.1835-.8635 2.869-.562.6825-1.377 1.0435-2.356 1.0435-.979 0-1.795-.361-2.3585-1.0435-.5665-.6865-.8665-1.6785-.8665-2.869v-.0105c0-1.1905.2995-2.1815.8665-2.8665.5635-.681 1.379-1.041 2.3585-1.041.9795 0 1.794.36 2.356 1.041.565.684.8635 1.675.8635 2.8665Zm-1.793 0c0-1.654-.5065-2.5655-1.4265-2.5655-.92 0-1.432.935-1.432 2.5655v.0105c0 1.6335.522 2.571 1.432 2.571.91 0 1.4265-.937 1.4265-2.571v-.0105Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'PlaySpeedX1Thin';
