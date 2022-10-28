import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M20.75 2.5h-2c-.15 0-.25.1-.25.25V6h-13V2.75c0-.15-.1-.25-.25-.25h-2c-.15 0-.25.1-.25.25V8.2c0 .15.15.3.3.3h17.45c.15 0 .3-.15.3-.3V2.75c-.05-.15-.15-.25-.3-.25Zm-17.5 19h2c.15 0 .25-.1.25-.25V18h13v3.25c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25V15.8c0-.15-.15-.3-.3-.3H3.3c-.15 0-.3.15-.3.3v5.45c0 .15.1.25.25.25Zm19-8.25H1.75c-.15 0-.25-.1-.25-.25v-2c0-.15.1-.25.25-.25h20.5c.15 0 .25.1.25.25v2c0 .15-.1.25-.25.25Z" />
  </Svg>
);

Fill.iconType = 'Fill';
