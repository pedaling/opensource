import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'laptop-regular',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M2.5,20.6c-1.2,0-2.1-0.9-2.1-2.1v-0.6h7.3l0,0.1c0.2,0.4,0.6,0.7,1.1,0.7h6.5c0.5,0,0.9-0.3,1.1-0.7l0-0.1h7.3v0.6 c0,1.2-0.9,2.1-2.1,2.1H2.5z M2.4,17.1V5.5c0-1.2,0.9-2.1,2.1-2.1h15c1.2,0,2.1,0.9,2.1,2.1v11.6H2.4z M19.4,14.9V5.6H4.6v9.3H19.4z" />
  </Svg>
);

Regular.iconType = 'Regular';
