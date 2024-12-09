import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'thundercircle-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 2.75c5.1 0 9.25 4.15 9.25 9.25S17.1 21.25 12 21.25 2.75 17.1 2.75 12 6.9 2.75 12 2.75M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.05 1 12 1" />
    <Svg.Path d="m7.3 16.1 2.25-5.7c.05-.15.2-.2.3-.15l3.5 1.35 1.7-4.3c.05-.15.2-.2.3-.15l1.15.45c.15.05.2.2.15.3l-2.25 5.7c-.05.15-.2.2-.3.15l-3.5-1.35-1.7 4.3c-.05.15-.2.2-.3.15l-1.15-.45c-.1-.05-.2-.2-.15-.3" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'ThunderCircleThin';
