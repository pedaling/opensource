import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'laptop-fill',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M2.5,20.6c-1.2,0-2.1-0.9-2.1-2.1v-0.6h7.3l0,0.1c0.2,0.4,0.6,0.7,1.1,0.7h6.5c0.5,0,0.9-0.3,1.1-0.7l0-0.1h7.3v0.6 c0,1.2-0.9,2.1-2.1,2.1H2.5z M2.4,17.1V5.5c0-1.2,0.9-2.1,2.1-2.1h15c1.2,0,2.1,0.9,2.1,2.1v11.6H2.4z" />
  </Svg>
);

Fill.iconType = 'Fill';
