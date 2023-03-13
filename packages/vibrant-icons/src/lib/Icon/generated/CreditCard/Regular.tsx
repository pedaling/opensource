import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'creditcard',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M22.25 3.5H1.75c-.15 0-.25.1-.25.25v16.5c0 .15.1.25.25.25h20.5c.15 0 .25-.1.25-.25V3.75c0-.15-.1-.25-.25-.25ZM20 6v2.25H4V6h16ZM4 18v-6.25h16V18H4Z" />
  </Svg>
);

Regular.iconType = 'Regular';
