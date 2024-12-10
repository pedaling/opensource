import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'won-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M22.25 9.5h-2l1.15-4.2c.05-.15-.1-.3-.25-.3h-2c-.1 0-.2.1-.25.2l-1.15 4.3H14.5l-1.2-4.3c-.05-.1-.15-.2-.25-.2h-2.1c-.1 0-.2.1-.25.2L9.5 9.5H6.2L5 5.2c0-.1-.1-.2-.2-.2h-2c-.15 0-.3.15-.25.3l1.2 4.2h-2c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25h2.7l2.15 7.8c.05.1.15.2.25.2h2.1c.1 0 .2-.1.25-.2l2.1-7.8h1.35l2.15 7.8c.05.1.15.2.25.2h2.1c.1 0 .2-.1.25-.2l2.15-7.8h2.7c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25m-14.4 5.95L6.9 12h1.9zm8.25 0L15.15 12h1.9z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'WonRegular';
