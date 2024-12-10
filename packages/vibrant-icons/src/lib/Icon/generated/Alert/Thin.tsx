import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alert-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m12 5.15 9.1 15.1H2.9zM12 2c-.1 0-.15.05-.2.1L.05 21.6c-.1.15 0 .4.2.4h23.5c.2 0 .3-.2.2-.4L12.2 2.1c-.05-.05-.1-.1-.2-.1" />
    <Svg.Path d="M11.25 10.85v4.4c0 .05.05.1.1.1h1.3c.05 0 .1-.05.1-.1v-4.4c0-.05-.05-.1-.1-.1h-1.3c-.05 0-.1.05-.1.1M12 18.3a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'AlertThin';
