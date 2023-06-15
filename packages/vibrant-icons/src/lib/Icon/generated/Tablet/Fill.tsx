import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'tablet-fill',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M410 78H70c-23.16 0-42 18.84-42 42v240c0 23.16 18.84 42 42 42h340c23.16 0 42-18.84 42-42V120c0-23.16-18.84-42-42-42ZM300 352H180c-12.13 0-22-9.87-22-22s9.87-22 22-22h120c12.13 0 22 9.87 22 22s-9.87 22-22 22Z" />
  </Svg>
);

Fill.iconType = 'Fill';
