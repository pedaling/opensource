import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Regular: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="m12 7.4 3.35 6.05c.05.1.2.15.35.1l4.2-2.35-1.2 7.8H5.3l-1.15-7.8 4.2 2.35c.1.05.25 0 .35-.1L12 7.4Zm0-4.9c-.1 0-.2.05-.25.15l-4.2 7.6L1.4 6.8c-.05-.05-.1-.05-.15-.05-.15 0-.3.15-.25.3l2.1 14.2c0 .15.15.2.25.2h17.3c.15 0 .25-.1.25-.2L23 7.05c.05-.15-.1-.3-.25-.3-.05 0-.1 0-.15.05l-6.15 3.45-4.2-7.6A.275.275 0 0 0 12 2.5Z" />
  </Svg>
);
