import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M18 4.5v13l-1.95 1.4-1.95-1.4c-.1-.05-.2-.05-.3 0l-1.95 1.4-1.9-1.4c-.1-.05-.2-.05-.3 0L7.7 18.9 6 17.7V4.5h12ZM20.2 2H3.75c-.15 0-.25.1-.25.25V21.5c0 .2.25.3.4.2l1.75-1.2 1.95 1.4c.1.05.2.05.3 0l1.95-1.4 1.95 1.4c.1.05.2.05.3 0l1.95-1.4L16 21.9c.1.05.2.05.3 0l1.95-1.4 2 1.25c.15.1.4 0 .4-.2V2.3c-.15-.15-.3-.3-.45-.3Z" />
    <Svg.Path d="M15.25 8.25h-6.5c-.15 0-.25-.1-.25-.25V7c0-.15.1-.25.25-.25h6.5c.15 0 .25.1.25.25v1c0 .15-.1.25-.25.25Zm0 3.5h-6.5c-.15 0-.25-.1-.25-.25v-1c0-.15.1-.25.25-.25h6.5c.15 0 .25.1.25.25v1c0 .15-.1.25-.25.25Zm0 3.5h-6.5c-.15 0-.25-.1-.25-.25v-1c0-.15.1-.25.25-.25h6.5c.15 0 .25.1.25.25v1c0 .15-.1.25-.25.25Z" />
  </Svg>
);

Regular.iconType = 'Regular';
