import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'home-fill',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.6499 21.85C21.7604 21.85 21.8499 21.7604 21.8499 21.65V9.54544C21.8499 9.48764 21.8249 9.43267 21.7813 9.39469L12.1313 0.982045C12.056 0.916386 11.9438 0.916385 11.8685 0.982044L2.21847 9.39469C2.17491 9.43267 2.1499 9.48764 2.1499 9.54544V21.65C2.1499 21.7604 2.23944 21.85 2.3499 21.85H10.6999C10.8104 21.85 10.8999 21.7604 10.8999 21.65V14.85C10.8999 14.7395 10.9894 14.65 11.0999 14.65H12.8999C13.0104 14.65 13.0999 14.7395 13.0999 14.85V21.65C13.0999 21.7604 13.1894 21.85 13.2999 21.85H21.6499Z" />
  </Svg>
);

Fill.iconType = 'Fill';
