import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Regular: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M8 12.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm8 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm-4 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" />
    <Svg.Path d="M12 3.5c4.5 0 8.2 3.75 8 8.35-.15 3.65-2.85 6.7-6.4 7.5-.1 0-.15.05-.2.1L12 20.8l-1.4-1.35a.38.38 0 0 0-.2-.1c-3.55-.85-6.25-3.9-6.4-7.5-.2-4.6 3.5-8.35 8-8.35ZM12 1C6.2 1 1.5 5.7 1.5 11.5c0 4.95 3.4 9.05 8 10.2.1 0 .15.05.25.15l2.1 2.1c0 .05.1.05.15.05.05 0 .15 0 .2-.05l2.1-2.1c.05-.05.15-.1.25-.15 4.6-1.15 8-5.25 8-10.2C22.5 5.7 17.8 1 12 1Z" />
  </Svg>
);
