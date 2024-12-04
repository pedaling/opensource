import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chevronright-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m15.955 11.525-8.2 8.2c-.1.1-.1.25 0 .35l.9.9c.1.1.25.1.35 0l9.25-9.25c.1-.1.1-.25 0-.35l-9.25-9.3c-.1-.1-.25-.1-.35 0l-.9.9c-.1.1-.1.25 0 .35l8.2 8.2Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'ChevronRightThin';
