import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'tablet-regular',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M7.9,16c0-0.6,0.5-1.1,1.1-1.1h6c0.6,0,1.1,0.5,1.1,1.1s-0.5,1.1-1.1,1.1H9C8.4,17.1,7.9,16.6,7.9,16z M22.6,6v12 c0,1.2-0.9,2.1-2.1,2.1h-17c-1.2,0-2.1-0.9-2.1-2.1V6c0-1.2,0.9-2.1,2.1-2.1h17C21.7,3.9,22.6,4.8,22.6,6z M20.4,6.1H3.6v11.8h16.8 V6.1z" />
  </Svg>
);

Regular.iconType = 'Regular';
