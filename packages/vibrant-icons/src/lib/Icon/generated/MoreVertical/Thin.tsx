import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M12 6.6a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Zm0 7a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Zm0 7a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Z" />
  </Svg>
);
