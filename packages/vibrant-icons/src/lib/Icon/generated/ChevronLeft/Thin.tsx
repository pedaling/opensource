import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chevronleft-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m8.05 12 8.2-8.2c.1-.1.1-.25 0-.35l-.9-.9a.43.43 0 0 0-.35 0L5.75 11.8c-.1.1-.1.25 0 .35l9.25 9.3c.1.1.25.1.35 0l.9-.9c.1-.1.1-.25 0-.35z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'ChevronLeftThin';
