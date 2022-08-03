import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm-1.25 5.6c0-.05.05-.1.1-.1h2.3c.05 0 .1.05.1.1v6.8c0 .05-.05.1-.1.1h-2.3c-.05 0-.1-.05-.1-.1V6.6ZM12 18c-.85 0-1.5-.65-1.5-1.5S11.15 15 12 15s1.5.65 1.5 1.5S12.85 18 12 18Z" />
  </Svg>
);
