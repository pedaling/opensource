import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'replay-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 22.85a10.89 10.89 0 0 1-9.326-5.303l1.472-.85A9.19 9.19 0 0 0 12 21.15c5.046 0 9.15-4.105 9.15-9.15 0-5.046-4.105-9.15-9.15-9.15a9.1 9.1 0 0 0-6.354 2.567l-.131.126 1.42.994a.1.1 0 0 1-.024.176L2.803 8.191a.1.1 0 0 1-.134-.094l-.017-4.366a.1.1 0 0 1 .158-.082l1.192.834.104.074.09-.093A10.9 10.9 0 0 1 12 1.15c5.983 0 10.85 4.867 10.85 10.85S17.983 22.85 12 22.85M9.65 8.447a.1.1 0 0 1 .153-.085l5.772 3.553a.1.1 0 0 1 0 .17l-5.772 3.553a.1.1 0 0 1-.153-.086z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'ReplayThin';
