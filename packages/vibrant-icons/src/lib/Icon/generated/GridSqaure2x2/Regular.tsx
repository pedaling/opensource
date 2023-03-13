import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M8.25 15.75v3.75H4.5v-3.75h3.75Zm2.2-2.5h-8.2c-.15 0-.25.1-.25.25v8.25c0 .15.1.25.25.25h8.25c.15 0 .25-.1.25-.25v-8.2c0-.15-.15-.3-.3-.3Zm9.05 2.5v3.75h-3.75v-3.75h3.75Zm2.2-2.5h-8.2c-.15 0-.25.1-.25.25v8.25c0 .15.1.25.25.25h8.25c.15 0 .25-.1.25-.25v-8.2c0-.15-.15-.3-.3-.3ZM8.25 4.5v3.75H4.5V4.5h3.75Zm2.2-2.5h-8.2C2.1 2 2 2.1 2 2.25v8.25c0 .15.1.25.25.25h8.25c.15 0 .25-.1.25-.25V2.3c0-.15-.15-.3-.3-.3Zm9.05 2.5v3.75h-3.75V4.5h3.75ZM21.7 2h-8.2c-.15 0-.25.1-.25.25v8.25c0 .15.1.25.25.25h8.25c.15 0 .25-.1.25-.25V2.3c0-.15-.15-.3-.3-.3Z" />
  </Svg>
);

Regular.iconType = 'Regular';
