import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg data-testid={testId} viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="m7.05 9.4 4.75 7c.1.15.3.15.4 0l4.75-7c.1-.15 0-.4-.2-.4h-9.5c-.2 0-.3.25-.2.4Z" />
  </Svg>
);

Fill.iconType = 'Fill';
