import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'playbacka-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m5.1 5.1-.7-.7c-.1-.1-.25-.1-.35 0C2.15 6.4 1 9.05 1 12s1.15 5.6 3.05 7.6c.1.1.25.1.35 0l.7-.7c.1-.1.1-.25 0-.35-1.6-1.7-2.6-4-2.6-6.55s1-4.85 2.6-6.55c.1-.1.1-.25 0-.35m14.5-.7-.7.7c-.1.1-.1.25 0 .35 1.6 1.7 2.6 4 2.6 6.55s-1 4.85-2.6 6.55c-.1.1-.1.25 0 .35l.7.7c.1.1.25.1.35 0 1.9-2 3.05-4.65 3.05-7.6s-1.15-5.6-3.05-7.6c-.1-.1-.25-.1-.35 0M7.5 12c0-1.15.45-2.2 1.15-3 .1-.1.1-.25 0-.35l-.7-.7c-.1-.1-.25-.1-.35 0C6.6 9 6 10.45 6 12s.6 3 1.6 4.05c.1.1.25.1.35 0l.7-.7c.1-.1.1-.25 0-.35-.7-.8-1.15-1.85-1.15-3m8.55-4.05-.7.7c-.1.1-.1.25 0 .35.7.8 1.15 1.85 1.15 3s-.45 2.2-1.15 3c-.1.1-.1.25 0 .35l.7.7c.1.1.25.1.35 0C17.4 15 18 13.55 18 12s-.6-3-1.6-4.05c-.05-.1-.25-.1-.35 0M12 13.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'PlayBackAThin';
