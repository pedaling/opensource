import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M11.69 1a.24.24 0 0 0-.205.115L2.555 14.76a.25.25 0 0 0 .205.385h6.295v7.635a.25.25 0 0 0 .255.25.24.24 0 0 0 .205-.115l8.93-13.645a.25.25 0 0 0-.205-.385h-6.295V1.25A.25.25 0 0 0 11.69 1Zm7.4 19.37h-.32l-.5.03-.425.035a.81.81 0 0 0-.5.22.628.628 0 0 0-.185.465.575.575 0 0 0 .09.325.59.59 0 0 0 .26.205c.12.044.247.066.375.065.19.002.378-.04.55-.12a1 1 0 0 0 .4-.345.89.89 0 0 0 .155-.5v-2.185a.5.5 0 0 0-.095-.315.606.606 0 0 0-.265-.2 1.031 1.031 0 0 0-.39-.065 1.09 1.09 0 0 0-.42.07.681.681 0 0 0-.29.21.635.635 0 0 0-.14.34h-2.135a2.29 2.29 0 0 1 .395-1.12 2.4 2.4 0 0 1 1-.8 3.905 3.905 0 0 1 1.61-.3 4.236 4.236 0 0 1 1.59.28c.42.156.786.426 1.06.78.247.322.38.719.375 1.125v4.535H19.12v-.935h-.05a1.87 1.87 0 0 1-.47.59 1.97 1.97 0 0 1-.64.34 2.714 2.714 0 0 1-.81.11 2.828 2.828 0 0 1-1.13-.21 1.72 1.72 0 0 1-.76-.65 2 2 0 0 1-.27-1.08 1.796 1.796 0 0 1 .665-1.535 3.23 3.23 0 0 1 1.78-.57l.655-.035h.98l.02 1.24Z" />
  </Svg>
);
