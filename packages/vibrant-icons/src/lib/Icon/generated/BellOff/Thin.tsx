import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'belloff-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M6.012 17h7.8l1.5 1.5H3.262c-.15 0-.25-.1-.25-.25v-1c0-.15.1-.25.25-.25h1.25V7.7l1.5 1.45zM2.062 2.8l.7-.7c.1-.1.25-.1.35 0l2.5 2.5c1.35-2.15 3.7-3.6 6.4-3.6 4.1 0 7.5 3.4 7.5 7.5V17h1.25c.15 0 .25.1.25.25v1c0 .15-.1.25-.25.25h-1.2l2.35 2.35c.1.1.1.25 0 .35l-.7.7c-.1.1-.25.1-.35 0L2.062 3.15a.43.43 0 0 1 0-.35m15.95 5.7c0-3.3-2.7-6-6-6-2.3 0-4.25 1.3-5.3 3.15l11.3 11.3zM12.012 23a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'BellOffThin';
