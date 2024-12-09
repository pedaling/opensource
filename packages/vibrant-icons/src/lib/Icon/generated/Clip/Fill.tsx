import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'clip-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M20.5 11.5c-.1-.1-.25-.1-.35 0l-6.9 6.9c-1.95 1.95-5.2 1.95-7.15 0s-1.95-5.15 0-7.15l6.4-6.4c1.15-1.15 3.05-1.15 4.25 0 .55.55.85 1.3.85 2.1s-.3 1.55-.85 2.1l-6.4 6.4c-.35.35-.95.35-1.3 0a.936.936 0 0 1 0-1.3L16.1 7.1c.1-.1.1-.25 0-.35L14.8 5.5c-.1-.1-.25-.1-.35 0l-7 7.05a3.23 3.23 0 0 0 0 4.55 3.23 3.23 0 0 0 4.55 0l6.4-6.4c1-1 1.55-2.35 1.55-3.75S19.4 4.2 18.4 3.2a5.28 5.28 0 0 0-7.45 0L4.5 9.6a7.3 7.3 0 0 0-2.15 5.2c0 1.95.75 3.8 2.15 5.2a7.26 7.26 0 0 0 5.2 2.15c1.9 0 3.75-.7 5.2-2.15l6.85-6.9c.1-.1.1-.25 0-.35z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'ClipFill';
