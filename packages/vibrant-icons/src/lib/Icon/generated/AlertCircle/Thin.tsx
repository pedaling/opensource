import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M12.05 21.25c-5.15 0-9.3-4.15-9.3-9.25s4.15-9.25 9.3-9.25A9.23 9.23 0 0 1 21.3 12c0 5.1-4.15 9.25-9.25 9.25Zm0 1.75c6.1 0 11.05-4.9 11.05-11S18.15 1 12.05 1C5.95 1 1 5.9 1 12s4.95 11 11.05 11Z" />
    <Svg.Path d="M12.9 6.75V14c0 .15-.1.25-.25.25H11.4c-.15 0-.25-.1-.25-.25V6.75c0-.15.1-.25.25-.25h1.25c.15 0 .25.1.25.25ZM12.05 18c.635 0 1.15-.492 1.15-1.1 0-.607-.515-1.1-1.15-1.1-.635 0-1.15.492-1.15 1.1 0 .608.515 1.1 1.15 1.1Z" />
  </Svg>
);
