import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'minus-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.25 12.9H2.75c-.15 0-.25-.1-.25-.25V11.4c0-.15.1-.25.25-.25h18.5c.15 0 .25.1.25.25v1.25c0 .1-.1.25-.25.25Z" />
  </Svg>
);

Thin.iconType = 'Thin';
