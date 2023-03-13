import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg data-testid={testId} viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M12 1h-.5C8.9 1.25 7 3.55 7 6.15V7H1.8c-.15 0-.25.15-.25.3l1.8 14.5c0 .1.15.2.25.2h16.85c.15 0 .25-.1.25-.2l1.8-14.5c0-.15-.1-.3-.25-.3H17v-.85c0-2.6-1.9-4.9-4.5-5.15H12ZM9.55 7v-.9c0-1.3.95-2.45 2.25-2.6h.5c1.3.15 2.25 1.3 2.25 2.6V7h-5Z" />
  </Svg>
);

Fill.iconType = 'Fill';
