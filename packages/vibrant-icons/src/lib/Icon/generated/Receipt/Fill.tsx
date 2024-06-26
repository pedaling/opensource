import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'receipt-fill',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M20.25 2H3.75c-.15 0-.25.1-.25.25V21.5c0 .2.25.3.4.2l1.75-1.2 1.95 1.4c.1.05.2.05.3 0l1.95-1.4 1.95 1.4c.1.05.2.05.3 0l1.95-1.4L16 21.9c.1.05.2.05.3 0l1.95-1.4 2 1.25c.15.1.4 0 .4-.2V2.25c-.15-.15-.25-.25-.4-.25ZM15.5 15c0 .15-.1.25-.25.25h-6.5c-.15 0-.25-.1-.25-.25v-1c0-.15.1-.25.25-.25h6.5c.15 0 .25.1.25.25v1Zm0-3.5c0 .15-.1.25-.25.25h-6.5c-.15 0-.25-.1-.25-.25v-1c0-.15.1-.25.25-.25h6.5c.15 0 .25.1.25.25v1Zm0-3.5c0 .15-.1.25-.25.25h-6.5c-.15 0-.25-.1-.25-.25V7c0-.15.1-.25.25-.25h6.5c.15 0 .25.1.25.25v1Z" />
  </Svg>
);

Fill.iconType = 'Fill';
