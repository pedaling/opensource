import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'bcircle-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 2.75A9.25 9.25 0 1 1 2.75 12 9.26 9.26 0 0 1 12 2.75M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22" />
    <Svg.Path d="M9.075 8.1a.25.25 0 0 1 .25-.25h3.365c1.56 0 2.54.8 2.54 2.075a1.825 1.825 0 0 1-1.595 1.795v.035a2 2 0 0 1 2 2c0 1.46-1.1 2.38-2.87 2.38h-3.43a.25.25 0 0 1-.25-.25zm1.74 1.04v2.145h1.245c.93 0 1.46-.405 1.46-1.1 0-.655-.5-1.035-1.28-1.035zm0 3.325v2.4h1.5c1 0 1.545-.415 1.545-1.2 0-.775-.56-1.19-1.585-1.19z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'BCircleThin';
