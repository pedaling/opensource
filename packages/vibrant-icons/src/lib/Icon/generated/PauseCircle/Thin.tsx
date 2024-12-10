import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'pausecircle-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 2.75c5.1 0 9.25 4.15 9.25 9.25S17.1 21.25 12 21.25 2.75 17.1 2.75 12 6.9 2.75 12 2.75M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1" />
    <Svg.Path d="M8.65 8.25v7.5c0 .15.1.25.25.25h1.25c.15 0 .25-.1.25-.25v-7.5c0-.15-.1-.25-.25-.25H8.9c-.15 0-.25.1-.25.25m5 0v7.5c0 .15.1.25.25.25h1.25c.15 0 .25-.1.25-.25v-7.5c0-.15-.1-.25-.25-.25H13.9c-.15 0-.25.1-.25.25" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'PauseCircleThin';
