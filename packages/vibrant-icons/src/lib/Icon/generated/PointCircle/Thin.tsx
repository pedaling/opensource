import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'pointcircle-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 2.75c5.1 0 9.25 4.15 9.25 9.25S17.1 21.25 12 21.25 2.75 17.1 2.75 12 6.9 2.75 12 2.75M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1" />
    <Svg.Path d="M9.6 15.9V8c0-.15.1-.25.25-.25h3.1c.6 0 1.1.15 1.55.35.4.25.75.6.95 1s.35.9.35 1.4-.1 1-.35 1.4c-.2.4-.55.75-1 1-.4.25-.95.35-1.55.35h-1.6v2.55c0 .15-.1.25-.25.25H9.8c-.1.1-.2 0-.2-.15m3.05-3.9q.45 0 .75-.15c.2-.1.35-.25.45-.5q.15-.3.15-.75c0-.45-.1-.8-.35-1.05s-.6-.35-1.05-.35h-1.3V12z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'PointCircleThin';
