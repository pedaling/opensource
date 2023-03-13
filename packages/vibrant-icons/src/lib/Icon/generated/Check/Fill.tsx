import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', testId = 'check', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m2.05 10.65 1.45-1.4c.1-.1.25-.1.35 0L10 15.4 20.15 5.25c.1-.1.25-.1.35 0l1.4 1.4c.1.1.1.25 0 .35L10.15 18.75c-.1.1-.25.1-.35 0L2.05 11a.427.427 0 0 1 0-.35Z" />
  </Svg>
);

Fill.iconType = 'Fill';
