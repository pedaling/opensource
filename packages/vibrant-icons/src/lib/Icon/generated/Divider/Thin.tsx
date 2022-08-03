import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M20.75 2.5H19.5c-.15 0-.25.1-.25.25v4H4.75v-4c0-.15-.1-.25-.25-.25H3.25c-.15 0-.25.1-.25.25V8.2c0 .15.15.3.3.3h17.45c.15 0 .3-.15.3-.3V2.75c-.05-.15-.15-.25-.3-.25Zm-17.5 19H4.5c.15 0 .25-.1.25-.25v-4h14.5v4c0 .15.1.25.25.25h1.25c.15 0 .25-.1.25-.25V15.8c0-.15-.15-.3-.3-.3H3.3c-.15 0-.3.15-.3.3v5.45c0 .15.1.25.25.25Zm19.5-8.6H1.25c-.15 0-.25-.1-.25-.25V11.4c0-.15.1-.25.25-.25h21.5c.15 0 .25.1.25.25v1.25c0 .1-.1.25-.25.25Z" />
  </Svg>
);
