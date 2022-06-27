import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Regular: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M12 3.5c4.7 0 8.5 3.8 8.5 8.5s-3.8 8.5-8.5 8.5-8.5-3.8-8.5-8.5S7.3 3.5 12 3.5ZM12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Z" />
    <Svg.Path d="M12 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-.9-6.2c.15-.45.4-.8.75-1.1.35-.3.65-.55.8-.8.2-.25.25-.5.25-.75 0-.35-.05-.6-.2-.75-.15-.15-.35-.25-.65-.25-.25 0-.45.1-.65.3-.15.2-.25.45-.25.8 0 .05-.05.1-.1.1H8.6c-.05 0-.1-.05-.1-.1.05-1.1.35-1.9 1-2.4.65-.55 1.5-.8 2.55-.8 1.1 0 1.95.25 2.55.75.6.5.9 1.25.9 2.25 0 .35-.05.7-.2.95-.1.25-.25.5-.45.75-.2.2-.45.5-.8.8l-.3.25c-.3.25-.45.5-.6.75-.1.25-.15.5-.15.9 0 .05-.05.1-.1.1h-2c-.05 0-.1-.05-.1-.1.1-.7.2-1.2.3-1.65Z" />
  </Svg>
);
