import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M12 2.5c-.1 0-.2.05-.25.15l-4.2 7.6L1.4 6.8c-.05-.05-.1-.05-.15-.05-.15 0-.3.15-.25.3l2.1 14.2c0 .15.15.2.25.2h17.3c.15 0 .25-.1.25-.2L23 7.05c.05-.15-.1-.3-.25-.3-.05 0-.1 0-.15.05l-6.15 3.45-4.2-7.6A.275.275 0 0 0 12 2.5Z" />
  </Svg>
);
