import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5Zm8.7 9.6h-3.85c-.1-2.95-.8-5.55-1.8-7.3 3.05 1.15 5.3 3.95 5.65 7.3ZM12 20.75c-1.05 0-2.9-2.95-3.1-7.9h6.2c-.2 4.95-2.05 7.9-3.1 7.9ZM8.9 11.1c.2-4.9 2.05-7.9 3.1-7.9 1.05 0 2.9 2.95 3.1 7.9H8.9Zm.05-7.3c-1 1.75-1.7 4.35-1.8 7.3H3.3c.35-3.35 2.6-6.15 5.65-7.3ZM3.3 12.9h3.85c.1 2.95.8 5.55 1.8 7.3-3.05-1.15-5.3-3.95-5.65-7.3Zm11.75 7.3c1-1.75 1.7-4.35 1.8-7.3h3.85c-.35 3.35-2.6 6.15-5.65 7.3Z" />
  </Svg>
);
