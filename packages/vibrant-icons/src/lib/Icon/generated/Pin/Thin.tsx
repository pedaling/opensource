import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'pin-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m21 16.15-3.5-6.5c-.05-.05-.05-.15-.05-.25V2.25c0-.15-.1-.25-.25-.25H6.85c-.15 0-.25.1-.25.25v7.1c0 .1 0 .15-.05.25l-3.5 6.5c-.05.05-.05.1-.05.15 0 .15.1.25.25.25h7.85v5.2c0 .1.05.2.1.25l.6.95c.05.1.15.1.2.1s.15-.05.2-.1l.6-.95c.05-.1.1-.15.1-.25v-5.2h7.85c.15 0 .25-.1.25-.25zm-15.25-1.4 2.3-4.3c.2-.35.25-.7.25-1.05V3.75h7.3v5.6c0 .35.1.75.25 1.05l2.3 4.3H5.75z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'PinThin';
