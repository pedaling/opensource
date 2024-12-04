import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'arrowup-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M19.95 9.8 12.2 2.05c-.1-.1-.25-.1-.35 0L4.1 9.8c-.1.1-.1.25 0 .35l.9.9c.1.1.25.1.35 0l5.8-5.8v16.5c0 .15.1.25.25.25h1.25c.15 0 .25-.1.25-.25V5.25l5.8 5.8c.1.1.25.1.35 0l.9-.9c.1-.05.1-.25 0-.35Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'ArrowUpThin';
