import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'close-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m13.25 12 6.6-6.6c.1-.1.1-.25 0-.35l-.85-.9c-.1-.1-.25-.1-.35 0L12 10.75l-6.6-6.6c-.1-.1-.25-.1-.35 0l-.9.85c-.1.1-.1.25 0 .35l6.6 6.65-6.6 6.6c-.1.1-.1.25 0 .35l.9.9c.1.1.25.1.35 0l6.6-6.6 6.6 6.6c.1.1.25.1.35 0l.9-.9c.1-.1.1-.25 0-.35z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'CloseThin';
