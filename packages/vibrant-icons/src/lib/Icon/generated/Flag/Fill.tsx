import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'flag-fill',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M18.5 8L21.95 2.35C22 2.3 22 2.25 22 2.25C22 2.1 21.9 2 21.75 2H5.25H3.25C3.1 2 3 2.1 3 2.25V13.75V21.75C3 21.9 3.1 22 3.25 22H5.25C5.4 22 5.5 21.9 5.5 21.75V14H21.75C21.9 14 22 13.9 22 13.75C22 13.7 22 13.65 21.95 13.65L18.5 8Z" />
  </Svg>
);

Fill.iconType = 'Fill';
