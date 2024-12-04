import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'reply-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.35 17.85C22.4 16.15 23 14.15 23 12c0-6.1-4.9-11-11-11C5.5 1 .35 6.6 1.05 13.25c.55 5.05 4.65 9.15 9.7 9.7 2.6.3 5.05-.35 7.05-1.6.1-.05.2-.1.3-.05l3.1.25c.15 0 .25-.1.25-.25l-.25-3.15c.05-.15.05-.25.15-.3ZM7.5 13.5c-.85 0-1.5-.65-1.5-1.5s.65-1.5 1.5-1.5S9 11.15 9 12s-.65 1.5-1.5 1.5Zm4.5 0c-.85 0-1.5-.65-1.5-1.5s.65-1.5 1.5-1.5 1.5.65 1.5 1.5-.65 1.5-1.5 1.5Zm4.5 0c-.85 0-1.5-.65-1.5-1.5s.65-1.5 1.5-1.5 1.5.65 1.5 1.5-.65 1.5-1.5 1.5Z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'ReplyFill';
