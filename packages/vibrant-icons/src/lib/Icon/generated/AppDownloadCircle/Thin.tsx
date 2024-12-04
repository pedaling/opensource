import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'appdownloadcircle-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M16.75 17h-9.5c-.15 0-.25-.1-.25-.25V15.5c0-.15.1-.25.25-.25h9.5c.15 0 .25.1.25.25v1.25c0 .15-.1.25-.25.25Z" />
    <Svg.Path d="M12 2.75c5.1 0 9.25 4.15 9.25 9.25S17.1 21.25 12 21.25 2.75 17.1 2.75 12 6.9 2.75 12 2.75ZM12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Z" />
    <Svg.Path d="m12.2 14.15 4.4-4.4c.1-.1.1-.25 0-.35l-.85-.9c-.1-.1-.25-.1-.35 0L12.9 11V5.65c0-.15-.1-.25-.25-.25H11.4c-.15 0-.25.1-.25.25V11l-2.5-2.5c-.1-.1-.25-.1-.35 0l-.9.9c-.1.1-.1.25 0 .35l4.4 4.4c.1.1.3.1.4 0Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'AppDownloadCircleThin';
