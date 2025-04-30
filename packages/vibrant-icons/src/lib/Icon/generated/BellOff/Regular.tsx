import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'belloff-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12.005 23a2 2 0 1 1 0-4 2 2 0 0 1 0 4m-5-10.75V15h2.75l2.5 2.5h-9c-.15 0-.25-.1-.25-.25v-2c0-.15.1-.25.25-.25h1.25V9.75zM2.055 3.5l1.45-1.45c.1-.1.25-.1.35 0l2.05 2.05c1.4-1.85 3.6-3.1 6.1-3.1 4.1 0 7.5 3.4 7.5 7.5V15h1.25c.15 0 .25.1.25.25v2c0 .15-.1.25-.25.25h-1.5l2.65 2.65c.1.1.1.25.05.35l-1.45 1.45c-.1.1-.25.1-.35 0l-18.1-18.1a.43.43 0 0 1 0-.35M17.005 15V8.5c0-2.75-2.25-5-5-5-1.8 0-3.4 1-4.3 2.45l9.05 9.05z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'BellOffRegular';
