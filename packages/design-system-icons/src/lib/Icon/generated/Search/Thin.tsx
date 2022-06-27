import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="m22.45 21.2-5.35-5.35c1.2-1.45 1.9-3.3 1.9-5.35C19 5.8 15.2 2 10.5 2S2 5.8 2 10.5 5.8 19 10.5 19c2.05 0 3.9-.7 5.35-1.9l5.35 5.35c.1.1.25.1.35 0l.9-.9c.1-.1.1-.25 0-.35ZM3.75 10.5c0-3.7 3.05-6.75 6.75-6.75s6.75 3.05 6.75 6.75-3.05 6.75-6.75 6.75-6.75-3.05-6.75-6.75Z" />
  </Svg>
);
