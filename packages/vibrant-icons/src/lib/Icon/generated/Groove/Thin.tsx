import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'groove-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M5.25 12.9h13.5c.15 0 .25-.1.25-.25V11.4c0-.15-.1-.25-.25-.25H5.25c-.15 0-.25.1-.25.25v1.25c0 .1.1.25.25.25Zm0-7.3h13.5c.15 0 .25-.1.25-.25V4.1c0-.15-.1-.25-.25-.25H5.25C5.1 3.85 5 4 5 4.1v1.25c0 .15.1.25.25.25Zm0 14.5h13.5c.15 0 .25-.1.25-.25V18.6c0-.15-.1-.25-.25-.25H5.25c-.15 0-.25.1-.25.25v1.25c0 .15.1.25.25.25Z" />
  </Svg>
);

Thin.iconType = 'Thin';
