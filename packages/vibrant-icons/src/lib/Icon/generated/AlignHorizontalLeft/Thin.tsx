import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'alignhorizontalleft-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M1.65039 22.3499v-20.7h1.2v20.7h-1.2Zm4.35-3.25c-.469 0-.85-.381-.85-.85v-4c0-.469.381-.85.85-.85h9.00001c.469 0 .85.381.85.85v4c0 .469-.381.85-.85.85H6.00039Zm.85-1.7h7.30001v-2.3H6.85039v2.3Zm-.85-6.8c-.469 0-.85-.381-.85-.85v-4c0-.469.381-.85.85-.85H21.0004c.469 0 .85.381.85.85v4c0 .469-.381.85-.85.85H6.00039Zm.85-1.7H20.1504v-2.3H6.85039v2.3Z" />
  </Svg>
);

Thin.iconType = 'Thin';
