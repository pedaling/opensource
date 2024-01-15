import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'handle-regular',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M4.9 20.6v-2.2h14.2v2.2H4.9Zm0-7.5v-2.2h14.2v2.2H4.9Zm0-7.5V3.4h14.2v2.2H4.9Z" />
  </Svg>
);

Regular.iconType = 'Regular';
