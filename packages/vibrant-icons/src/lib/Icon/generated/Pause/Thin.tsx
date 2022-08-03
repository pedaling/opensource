import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M15.25 20.765a.22.22 0 0 0 .2.235h1.6a.22.22 0 0 0 .2-.235V3.235a.22.22 0 0 0-.2-.235h-1.6a.22.22 0 0 0-.2.235v17.53Zm-8.5 0a.22.22 0 0 0 .2.235h1.6a.22.22 0 0 0 .2-.235V3.235A.22.22 0 0 0 8.55 3h-1.6a.22.22 0 0 0-.2.235v17.53Z" />
  </Svg>
);
