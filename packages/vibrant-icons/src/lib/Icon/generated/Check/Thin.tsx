import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'check-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M10 16.2 3.3 9.5c-.1-.1-.25-.1-.35 0l-.9.9c-.05.1-.05.25 0 .35L9.8 18.5c.1.1.25.1.35 0L21.9 6.75c.1-.1.1-.25 0-.35l-.85-.9c-.1-.1-.25-.1-.35 0z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'CheckThin';
