import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'closecircle-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m13.25 12 3.45-3.45c.1-.1.1-.25 0-.35l-.9-.9c-.1-.1-.25-.1-.35 0L12 10.75 8.55 7.3c-.1-.1-.25-.1-.35 0l-.9.9c-.1.1-.1.25 0 .35L10.75 12 7.3 15.45c-.1.1-.1.25 0 .35l.9.9c.1.1.25.1.35 0L12 13.25l3.45 3.45c.1.1.25.1.35 0l.9-.9c.1-.1.1-.25 0-.35L13.25 12Z" />
    <Svg.Path d="M12 2.75c5.1 0 9.25 4.15 9.25 9.25S17.1 21.25 12 21.25 2.75 17.1 2.75 12 6.9 2.75 12 2.75ZM12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'CloseCircleThin';
