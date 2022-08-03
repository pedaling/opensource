import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Regular: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M14.75 20.765a.275.275 0 0 0 .3.235h2.4a.275.275 0 0 0 .3-.235V3.235a.275.275 0 0 0-.3-.235h-2.4a.275.275 0 0 0-.3.235v17.53Zm-8.5 0a.275.275 0 0 0 .3.235h2.4a.275.275 0 0 0 .3-.235V3.235A.275.275 0 0 0 8.95 3h-2.4a.275.275 0 0 0-.3.235v17.53Z" />
  </Svg>
);
