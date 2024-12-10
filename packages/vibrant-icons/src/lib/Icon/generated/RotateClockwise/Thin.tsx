import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'rotateclockwise-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m20.85 17.15-1.1-.65a.264.264 0 0 0-.35.1c-1.75 2.8-5 4.55-8.65 4.05-3.9-.55-7.05-3.7-7.5-7.65C2.7 7.75 6.8 3.25 12 3.25c1.35 0 2.65.3 3.8.9l-.9 1.45c-.1.15 0 .4.2.4l4.8-.05c.2 0 .3-.2.25-.35l-2-4.35c-.1-.25-.35-.25-.45-.1l-.95 1.5c-1.55-.8-3.3-1.2-5.2-1.15C6.2 1.7 1.8 6.05 1.5 11.4 1.15 17.5 6 22.5 12 22.5c3.8 0 7.1-2 8.95-5 .05-.1 0-.3-.1-.35" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'RotateClockwiseThin';
