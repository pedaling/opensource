import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'woncircle-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 3.5c4.7 0 8.5 3.8 8.5 8.5s-3.8 8.5-8.5 8.5-8.5-3.8-8.5-8.5S7.3 3.5 12 3.5M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1" />
    <Svg.Path d="M17.75 11.25H16.7l.75-2.7c.05-.15-.1-.3-.25-.3h-1.5c-.1 0-.2.1-.25.2l-.75 2.8h-.85l-.75-2.8c-.05-.1-.15-.2-.25-.2h-1.6c-.1 0-.2.1-.25.2l-.75 2.8H9.4l-.75-2.8c-.05-.1-.15-.2-.25-.2H6.9c-.15 0-.3.15-.25.3l.75 2.7H6.35c-.15 0-.25.1-.25.25V13c0 .15.1.25.25.25h1.6l.85 3.05c.05.1.15.2.25.2h1.6c.1 0 .2-.1.25-.2l.85-3.05h.75l.85 3.05c.05.1.15.2.25.2h1.6c.1 0 .2-.1.25-.2l.85-3.05h1.6c.15 0 .25-.1.25-.25v-1.5c-.15-.15-.25-.25-.4-.25" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'WonCircleRegular';
