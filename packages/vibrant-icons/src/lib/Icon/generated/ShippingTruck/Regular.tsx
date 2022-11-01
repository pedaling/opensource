import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M16.5 4.5h5.25c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25h-7.5c-.15 0-.25.1-.25.25V6H9.15c-.1 0-.2.05-.25.15l-2 5.35-4.75 1.45c-.1.05-.15.15-.15.25v7.55c0 .15.1.25.25.25h3.7c.65 1.2 1.9 2 3.3 2s2.7-.8 3.3-2h9.2c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25H16.5v-14Zm-7.25 16c-.7 0-1.25-.55-1.25-1.25S8.55 18 9.25 18s1.25.55 1.25 1.25-.55 1.25-1.25 1.25Zm4.75-2h-1.1c-.35-1.7-1.85-3-3.65-3-1.8 0-3.35 1.3-3.65 3H4.5v-3.65L7.35 14H14v4.5Zm0-7H9.6l1.1-3H14v3Z" />
  </Svg>
);

Regular.iconType = 'Regular';
