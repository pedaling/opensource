import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'sad-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M9.5 10.75H8c-.15 0-.25-.1-.25-.25V9c0-.15.1-.25.25-.25h1.5c.15 0 .25.1.25.25v1.5c0 .15-.1.25-.25.25Zm6.5 0h-1.5c-.15 0-.25-.1-.25-.25V9c0-.15.1-.25.25-.25H16c.15 0 .25.1.25.25v1.5c0 .15-.1.25-.25.25Z" />
    <Svg.Path d="M12 2.5c5.25 0 9.5 4.25 9.5 9.5s-4.25 9.5-9.5 9.5-9.5-4.25-9.5-9.5S6.75 2.5 12 2.5ZM12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Z" />
    <Svg.Path d="M12 15.4c-1.25 0-2.35.55-3.1 1.35-.1.1-.25.1-.35.05L7.6 16c-.1-.1-.15-.25-.05-.35 1.1-1.2 2.7-2 4.45-2s3.35.75 4.45 2c.1.1.1.25-.05.35l-.95.8c-.1.1-.25.05-.35-.05-.8-.8-1.9-1.35-3.1-1.35Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'SadThin';
