import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'alignhorizontalright-regular',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M9.00039 19.3499c-.6065 0-1.1-.4935-1.1-1.1v-4c0-.6065.4935-1.1 1.1-1.1h9.00001c.6065 0 1.1.4935 1.1 1.1v4c0 .6065-.4935 1.1-1.1 1.1H9.00039Zm7.90001-2.2v-1.8h-6.8v1.8h6.8ZM3.00039 10.8499c-.6065 0-1.1-.4935-1.1-1.1v-4c0-.6065.4935-1.1 1.1-1.1H18.0004c.6065 0 1.1.4935 1.1 1.1v4c0 .6065-.4935 1.1-1.1 1.1H3.00039Zm13.90001-2.2v-1.8H4.10039v1.8H16.9004ZM22.6004 1.3999h-1.7v21.2h1.7v-21.2Z" />
  </Svg>
);

Regular.iconType = 'Regular';
