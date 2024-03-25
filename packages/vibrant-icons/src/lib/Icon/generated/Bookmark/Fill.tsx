import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'bookmark-fill',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M11.9999 17.12L3.3999 23.195V0.900024H20.5999V23.195L11.9999 17.125V17.12Z" />
  </Svg>
);

Fill.iconType = 'Fill';
