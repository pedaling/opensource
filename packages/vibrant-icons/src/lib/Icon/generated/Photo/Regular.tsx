import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'photo-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M8.5 10.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5" />
    <Svg.Path d="M21.75 2H2.25C2.1 2 2 2.1 2 2.25v19.5c0 .15.1.25.25.25h19.5c.15 0 .25-.1.25-.25V2.25c0-.15-.1-.25-.25-.25M4.5 4.5h15v9.2l-4.35-4.35c-.1-.1-.2-.1-.3-.05L4.5 16.8zm.05 15 10.25-7.4 4.7 4.7v2.7z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'PhotoRegular';
