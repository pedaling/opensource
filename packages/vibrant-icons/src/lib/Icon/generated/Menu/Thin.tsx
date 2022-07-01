import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M2.25 12.9h19.5c.15 0 .25-.1.25-.25V11.4c0-.15-.1-.25-.25-.25H2.25c-.15 0-.25.1-.25.25v1.25c0 .1.1.25.25.25Zm0-7.3h19.5c.15 0 .25-.1.25-.25V4.1c0-.15-.1-.25-.25-.25H2.25C2.1 3.9 2 4 2 4.1v1.25c0 .15.1.25.25.25Zm0 14.5h19.5c.15 0 .25-.1.25-.25V18.6c0-.15-.1-.25-.25-.25H2.25c-.15.05-.25.15-.25.25v1.25c0 .15.1.25.25.25Z" />
  </Svg>
);
