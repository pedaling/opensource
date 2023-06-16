import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'mobile-regular',
  ...props
}) => (
  <Svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 24 24"
    xmlSpace="preserve"
    width={size}
    height={size}
    fill={fill}
    data-testid={testId}
    {...props}
  >
    <Svg.Path d="M7,22.6c-1.2,0-2.1-0.9-2.1-2.1v-17c0-1.2,0.9-2.1,2.1-2.1h10c1.2,0,2.1,0.9,2.1,2.1v17c0,1.2-0.9,2.1-2.1,2.1H7z M16.9,20.4V3.6H7.1v16.8H16.9z M13.5,6.6c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1h-3c-0.6,0-1.1,0.5-1.1,1.1s0.5,1.1,1.1,1.1H13.5z" />
  </Svg>
);

Regular.iconType = 'Regular';
