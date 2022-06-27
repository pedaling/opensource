import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Regular: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="m1.1 12.2 12.6 8.75c.05.05.05.05.1.05.1 0 .2-.1.2-.2v-5.2l7.7 5.35c.05.05.05.05.1.05.1 0 .2-.1.2-.2V3.2c0-.1-.1-.2-.2-.2-.05 0-.05 0-.1.05L14 8.4V3.2c0-.1-.1-.2-.2-.2-.05 0-.05 0-.1.05L1.1 11.8c-.15.1-.15.3 0 .4Zm18.4-4.6v8.8L13.2 12l6.3-4.4Zm-8 0v8.75L5.2 12l6.3-4.4Z" />
  </Svg>
);
