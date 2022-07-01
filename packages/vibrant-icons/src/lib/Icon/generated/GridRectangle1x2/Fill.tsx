import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M2.25 10.75h19.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25H2.25a.25.25 0 0 0-.25.25v7.75c0 .138.112.25.25.25Zm0 10.75h19.5a.25.25 0 0 0 .25-.25V13.5a.25.25 0 0 0-.25-.25H2.25a.25.25 0 0 0-.25.25v7.75c0 .138.112.25.25.25Z" />
  </Svg>
);
