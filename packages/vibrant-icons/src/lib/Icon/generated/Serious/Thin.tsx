import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'serious-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M9.5 10.75H8c-.15 0-.25-.1-.25-.25V9c0-.15.1-.25.25-.25h1.5c.15 0 .25.1.25.25v1.5c0 .15-.1.25-.25.25m6.5 0h-1.5c-.15 0-.25-.1-.25-.25V9c0-.15.1-.25.25-.25H16c.15 0 .25.1.25.25v1.5c0 .15-.1.25-.25.25" />
    <Svg.Path d="M12 2.5c5.25 0 9.5 4.25 9.5 9.5s-4.25 9.5-9.5 9.5-9.5-4.25-9.5-9.5S6.75 2.5 12 2.5M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1" />
    <Svg.Path d="M14.75 16.1h-5.5c-.15 0-.25-.1-.25-.25V14.6c0-.15.1-.25.25-.25h5.5c.15 0 .25.1.25.25v1.25c0 .15-.1.25-.25.25" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'SeriousThin';
