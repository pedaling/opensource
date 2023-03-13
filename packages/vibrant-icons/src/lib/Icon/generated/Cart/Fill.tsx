import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg data-testid={testId} viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M4 20.5c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2Zm12 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm6.75-17.25H6.25A.25.25 0 0 1 6 5V1.75c0-.15-.1-.25-.25-.25h-4.5c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25h2a.25.25 0 0 1 .25.25V17.5c0 .15.1.25.25.25h15.9c.092 0 .184-.085.238-.177a.196.196 0 0 0 .019-.049L23 5.55c.05-.15-.1-.3-.25-.3Z" />
  </Svg>
);

Fill.iconType = 'Fill';
