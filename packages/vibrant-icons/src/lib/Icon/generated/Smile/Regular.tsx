import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'smile-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 3.5c4.7 0 8.5 3.8 8.5 8.5s-3.8 8.5-8.5 8.5-8.5-3.8-8.5-8.5S7.3 3.5 12 3.5M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1" />
    <Svg.Path d="M12 17.35c-1.7 0-3.3-.7-4.45-2-.1-.1-.1-.25.05-.35l1.55-1.25c.1-.1.25-.05.35.05.65.7 1.55 1.1 2.5 1.1s1.85-.4 2.5-1.1c.1-.1.25-.1.35-.05L16.4 15c.1.1.15.25.05.35-1.15 1.25-2.75 2-4.45 2M9.75 11h-2c-.15 0-.25-.1-.25-.25v-2c0-.15.1-.25.25-.25h2c.15 0 .25.1.25.25v2c0 .15-.1.25-.25.25m6.5 0h-2c-.15 0-.25-.1-.25-.25v-2c0-.15.1-.25.25-.25h2c.15 0 .25.1.25.25v2c0 .15-.1.25-.25.25" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'SmileRegular';
