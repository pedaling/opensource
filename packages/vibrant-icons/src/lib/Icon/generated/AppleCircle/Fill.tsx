import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'applecircle-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1m.4 5.15c.4-.5 1.1-.85 1.7-.85.05.65-.2 1.35-.6 1.8-.4.5-1.05.85-1.7.8-.1-.6.2-1.3.6-1.75m3.25 9.15c-.5.7-.95 1.4-1.75 1.4-.75 0-1-.45-1.9-.45-.85 0-1.15.45-1.85.45-.75.05-1.3-.75-1.8-1.45-1-1.4-1.75-4-.7-5.75.5-.85 1.4-1.4 2.35-1.45.75 0 1.45.5 1.9.5s1.3-.6 2.2-.5c.35 0 1.4.15 2.1 1.15-.05.05-1.25.75-1.25 2.15 0 1.75 1.5 2.3 1.55 2.3-.1.05-.3.85-.85 1.65" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'AppleCircleFill';
