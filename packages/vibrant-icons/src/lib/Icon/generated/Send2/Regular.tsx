import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'send2-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M22.85 11.75 2.35 2h-.1c-.15 0-.3.15-.25.3L4.7 12 2 21.7c-.05.15.1.3.25.3h.1l20.5-9.75c.2-.1.2-.4 0-.5M5.75 17.6l1.2-4.35h3.8c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25h-3.8L5.75 6.4 17.5 12z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'Send2Regular';
