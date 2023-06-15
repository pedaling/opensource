import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'tablet-regular',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M158 320c0-12.13 9.87-22 22-22h120c12.13 0 22 9.87 22 22s-9.87 22-22 22H180c-12.13 0-22-9.87-22-22Zm294-200v240c0 23.16-18.84 42-42 42H70c-23.16 0-42-18.84-42-42V120c0-23.16 18.84-42 42-42h340c23.16 0 42 18.84 42 42Zm-44 2H72v236h336V122Z" />
  </Svg>
);

Regular.iconType = 'Regular';
