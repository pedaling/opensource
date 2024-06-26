import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'add-regular',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.25 10.75h-8v-8c0-.15-.1-.25-.25-.25h-2c-.15 0-.25.1-.25.25v8h-8c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25h8v8c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25v-8h8c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25Z" />
  </Svg>
);

Regular.iconType = 'Regular';
