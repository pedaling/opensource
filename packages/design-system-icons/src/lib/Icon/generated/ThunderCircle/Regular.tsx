import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Regular: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="m16.55 7.6-1.85-.75c-.15-.05-.25 0-.3.15l-1.55 3.95L10 9.9c-.15-.05-.25 0-.3.15L7.35 16.1c-.05.15 0 .25.15.3l1.85.75c.15.05.25 0 .3-.15l1.55-3.95 2.8 1.1c.15.05.25 0 .3-.15l2.35-6.05c.1-.15 0-.3-.1-.35Z" />
    <Svg.Path d="M12 3.5c4.7 0 8.5 3.8 8.5 8.5s-3.8 8.5-8.5 8.5-8.5-3.8-8.5-8.5S7.3 3.5 12 3.5ZM12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.05 1 12 1Z" />
  </Svg>
);
