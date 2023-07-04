import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'alignhorizontalcenter-regular',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M11.1504 22.5999v-3.25H7.25039c-.6065 0-1.1-.4935-1.1-1.1v-4c0-.6065.4935-1.1 1.1-1.1h3.90001v-2.3H4.00039c-.6065 0-1.1-.4935-1.1-1.1v-4c0-.6065.4935-1.1 1.1-1.1h7.15001v-3.25h1.7v3.25h7.15c.6065 0 1.1.4935 1.1 1.1v4c0 .6065-.4935 1.1-1.1 1.1h-7.15v2.3h3.9c.6065 0 1.1.4935 1.1 1.1v4c0 .6065-.4935 1.1-1.1 1.1h-3.9v3.25h-1.7Zm4.5-5.45v-1.8H8.35039v1.8h7.30001Zm3.25-8.5v-1.8H5.10039v1.8H18.9004Z" />
  </Svg>
);

Regular.iconType = 'Regular';
