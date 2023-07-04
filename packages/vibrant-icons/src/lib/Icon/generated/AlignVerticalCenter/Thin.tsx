import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'alignverticalcenter-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M5.7502 20.8499c-.469 0-.85-.381-.85-.85v-7.4h-3.7v-1.2h3.7v-7.4c0-.469.381-.85.85-.85h4c.469 0 .85.381.85.85v7.4h2.8v-4.15c0-.469.381-.85.85-.85h4c.469 0 .85.381.85.85v4.15h3.8v1.2h-3.8v4.15c0 .469-.381.85-.85.85h-4c-.469 0-.85-.381-.85-.85v-4.15h-2.8v7.4c0 .469-.381.85-.85.85h-4Zm.85-1.7h2.3v-14.3h-2.3v14.3Zm8.5-3.25h2.3v-7.8h-2.3v7.8Z" />
  </Svg>
);

Thin.iconType = 'Thin';
