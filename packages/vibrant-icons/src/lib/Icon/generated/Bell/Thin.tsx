import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'bell-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 2.75c3.15 0 5.75 2.6 5.75 5.75v7.75H6.25V8.5c0-3.15 2.6-5.75 5.75-5.75M12 1C7.9 1 4.5 4.4 4.5 8.5v7.75H3.25c-.15 0-.25.1-.25.25v1.25c0 .15.1.25.25.25h17.5c.15 0 .25-.1.25-.25V16.5c0-.15-.1-.25-.25-.25H19.5V8.5C19.5 4.4 16.15 1 12 1m0 22a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'BellThin';
