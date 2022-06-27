import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="m22.35 10.8-10.2-9.25c-.05-.05-.1-.05-.15-.05-.05 0-.1 0-.15.05L1.65 10.8c-.1.1-.15.2-.15.35v11.1c0 .15.1.25.25.25h20.5c.15 0 .25-.1.25-.25v-11.1c0-.15-.05-.25-.15-.35Zm-1.6 9.95H12.9v-5.5c0-.15-.1-.25-.15-.25h-1.4c-.1 0-.2.1-.2.25v5.5h-7.9V11.7L12 3.8l8.75 7.95v9Z" />
  </Svg>
);
