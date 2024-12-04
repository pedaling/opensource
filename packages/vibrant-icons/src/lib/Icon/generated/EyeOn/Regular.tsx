import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'eyeon-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M22.75 13h-2c-.15 0-.25-.1-.25-.25C20.35 8.45 16.6 5 12 5s-8.35 3.45-8.5 7.75c0 .15-.1.25-.25.25h-2c-.15 0-.25-.1-.25-.25C1.15 7.05 6 2.5 12 2.5s10.85 4.55 11 10.25c0 .15-.1.25-.25.25Z" />
    <Svg.Path d="M15.2 13.05c.3.65.4 1.35.25 2.1-.25 1.4-1.35 2.5-2.7 2.75-2.4.5-4.5-1.55-4.2-3.95.2-1.3 1.1-2.4 2.35-2.8.65-.2 1.25-.2 1.85-.1.15.05.25-.05.3-.15L13.6 9c.05-.15-.05-.3-.2-.3-.85-.2-1.8-.25-2.8 0-2.4.6-4.3 2.65-4.55 5.1-.45 3.7 2.5 6.85 6.1 6.75 3.15-.1 5.8-2.75 5.85-5.9 0-1-.2-1.9-.6-2.75-.05-.15-.2-.15-.35-.1l-1.75.95c-.15.05-.15.2-.1.3Z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'EyeOnRegular';
