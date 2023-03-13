import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', testId = 'bold', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M5.25 2.5h7.85c1.7 0 3.05.45 4.05 1.3 1 .9 1.5 1.85 1.5 3.35 0 .75-.15 1.15-.4 1.75-.25.6-.6 1.1-1.1 1.5-.45.4-1.05.7-1.75.9v.1c.9.1 1.65.4 2.3.8.65.4 1.15 1 1.5 1.7.35.7.55 1.25.55 2.2 0 1.15-.3 1.95-.85 2.75-.55.85-1.35 1.5-2.4 1.95-1.05.45-2.25.65-3.7.65H5.25V2.5Zm2.65 8.1h3.3c1.1 0 2-.1 2.7-.35.7-.25 1.2-.6 1.55-1.05.35-.45.5-.85.5-1.55 0-.95-.3-1.45-.85-2-.6-.55-1.4-.8-2.45-.8h-4.7v5.75H7.9Zm0 8.6h3.7c1.9 0 3.3-.25 4.15-.8.85-.5 1.25-1.1 1.25-2.25 0-.75-.15-1.15-.5-1.65-.3-.55-.8-.95-1.4-1.2-.6-.3-1.35-.4-2.25-.4h-5v6.3h.05Z" />
  </Svg>
);

Fill.iconType = 'Fill';
