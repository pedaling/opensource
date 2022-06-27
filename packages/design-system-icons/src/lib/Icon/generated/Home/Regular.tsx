import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Regular: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="m22.35 10.8-10.2-9.25c-.1-.1-.25-.1-.35 0L1.65 10.8c-.1.1-.15.2-.15.35v11.1c0 .15.1.25.25.25h20.5c.15 0 .25-.1.25-.25v-11.1c0-.15-.05-.25-.15-.35ZM20 20h-6.75v-4.75c0-.15-.1-.25-.25-.25h-2c-.15 0-.25.1-.25.25V20H4v-7.95l8-7.25 8 7.25V20Z" />
  </Svg>
);
