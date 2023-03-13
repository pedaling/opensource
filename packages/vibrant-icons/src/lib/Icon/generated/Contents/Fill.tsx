import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'contents',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M20.2 2H3.75c-.15 0-.25.1-.25.25v19.5c0 .15.1.25.25.25h16.5c.15 0 .25-.1.25-.25V2.3c0-.15-.15-.3-.3-.3Zm-4.7 14.75c0 .15-.1.25-.25.25h-6.5c-.15 0-.25-.1-.25-.25v-1c0-.15.1-.25.25-.25h6.5c.15 0 .25.1.25.25v1Zm0-3c0 .15-.1.25-.25.25h-6.5c-.15 0-.25-.1-.25-.25v-1c0-.15.1-.25.25-.25h6.5c.15 0 .25.1.25.25v1Zm0-3c0 .15-.1.25-.25.25h-6.5c-.15 0-.25-.1-.25-.25v-3.5c0-.15.1-.25.25-.25h6.5c.15 0 .25.1.25.25v3.5Z" />
  </Svg>
);

Fill.iconType = 'Fill';
