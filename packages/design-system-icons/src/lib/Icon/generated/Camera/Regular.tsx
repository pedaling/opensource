import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Regular: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M19.5 4.5v15h-15v-15h15ZM21.7 2H2.25C2.1 2 2 2.1 2 2.25v19.5c0 .15.1.25.25.25h19.5c.15 0 .25-.1.25-.25V2.3c0-.15-.15-.3-.3-.3Z" />
    <Svg.Path d="M12 9.75c1.25 0 2.25 1 2.25 2.25s-1 2.25-2.25 2.25-2.25-1-2.25-2.25 1-2.25 2.25-2.25Zm0-2.5C9.4 7.25 7.25 9.4 7.25 12S9.4 16.75 12 16.75s4.75-2.15 4.75-4.75S14.6 7.25 12 7.25Zm5 1a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" />
  </Svg>
);
