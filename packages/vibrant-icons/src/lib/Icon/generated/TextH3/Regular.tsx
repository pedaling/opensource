import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Regular: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M13.75 2.5h-2c-.15 0-.25.1-.25.25v8h-8v-8c0-.15-.1-.25-.25-.25h-2c-.15 0-.25.1-.25.25v18.5c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25v-8h8v8c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25V2.75c0-.15-.1-.25-.25-.25Zm2.7 16.4h1.95c.05.5.55.9 1.3.9s1.25-.45 1.25-1.05c0-.7-.5-1.1-1.4-1.1h-.85v-1.5h.85c.8 0 1.25-.4 1.25-1s-.4-.95-1.1-.95c-.7 0-1.15.4-1.2.95l-1.85-.05c.1-1.55 1.3-2.55 3.05-2.55 1.85 0 3 .9 3 2.3 0 1.1-.75 1.8-1.65 2v.05c1.2.15 1.95.85 1.95 2 0 1.6-1.3 2.65-3.3 2.65-1.9-.05-3.15-1.1-3.25-2.65Z" />
  </Svg>
);
