import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'bookmark-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M11.9999 16.815L3.6499 22.71V1.15002H20.3499V22.71L11.9999 16.815V16.815ZM18.6499 19.43V2.85002H5.3499V19.43L11.9999 14.735L18.6499 19.43Z" />
  </Svg>
);

Thin.iconType = 'Thin';
