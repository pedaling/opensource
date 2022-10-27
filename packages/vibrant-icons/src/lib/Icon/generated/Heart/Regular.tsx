import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M20.75 4.8C19.55 3.6 18 3 16.45 3c-1.55 0-3.1.6-4.3 1.8-.05.05-.1.15-.15.2a.69.69 0 0 1-.15-.2C10.65 3.6 9.1 3 7.55 3c-1.55 0-3.1.6-4.3 1.8-2.35 2.4-2.35 6.35 0 8.75 2.35 2.4 8.55 8.35 8.55 8.35.05.1.15.1.2.1.05 0 .15 0 .15-.05 0 0 6.2-5.95 8.55-8.35 2.35-2.4 2.4-6.35.05-8.8Zm-.9 5.5c-.25.8-.8 1.45-1.35 2.05-1 1.1-2.1 2.1-3.2 3.1-1.1 1.05-2.2 2.1-3.3 3.2-1.1-1.05-2.2-2.15-3.3-3.2-1.1-1-2.2-2-3.2-3.1-.55-.6-1.1-1.25-1.35-2.05-.7-2.2 1-4.8 3.4-4.8 1.7 0 3.25 1.45 4.1 2.8.1.15.2.3.35.3.15 0 .25-.15.35-.3.8-1.35 2.4-2.8 4.1-2.8 2.4 0 4.05 2.55 3.4 4.8Z" />
  </Svg>
);

Regular.iconType = 'Regular';
