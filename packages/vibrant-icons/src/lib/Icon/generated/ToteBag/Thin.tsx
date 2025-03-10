import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'totebag-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M22.25 7h-5.6V5.65C16.65 3.1 14.55 1 12 1S7.4 3.05 7.4 5.6V7H1.8c-.15 0-.25.15-.25.3l1.8 14.5c0 .1.15.2.25.2h16.85c.15 0 .25-.1.25-.2l1.8-14.5c0-.15-.1-.3-.25-.3M9.15 5.65c0-1.6 1.3-2.9 2.9-2.9s2.9 1.3 2.9 2.9V7h-5.8zm9.95 14.6H4.95L3.5 8.75h17.05z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'ToteBagThin';
