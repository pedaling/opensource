import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M12 2.75c4.95 0 8.95 4.1 8.75 9.1-.15 4-3.1 7.3-7 8.2-.1 0-.15.05-.25.15L12 21.7l-1.5-1.5c-.05-.05-.15-.1-.25-.15-3.9-.9-6.85-4.2-7-8.2-.2-5 3.8-9.1 8.75-9.1ZM12 1C6.2 1 1.5 5.7 1.5 11.5c0 4.95 3.4 9.05 8 10.2.1 0 .15.05.25.15l2.1 2.1c0 .05.1.05.15.05.05 0 .15 0 .2-.05l2.1-2.1c.05-.05.15-.1.25-.15 4.6-1.15 8-5.25 8-10.2C22.5 5.7 17.8 1 12 1Z" />
    <Svg.Path d="M8 12.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm8 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm-4 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" />
  </Svg>
);
