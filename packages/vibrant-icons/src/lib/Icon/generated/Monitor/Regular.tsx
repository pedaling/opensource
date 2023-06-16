import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'monitor-regular',
  ...props
}) => (
  <Svg
    id="Layer_1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 24 24"
    style={{
      enableBackground: 'new 0 0 24 24',
    }}
    xmlSpace="preserve"
    width={size}
    height={size}
    fill={fill}
    data-testid={testId}
    {...props}
  >
    <Svg.Path d="M8.1,21.1v-2.2h1.8v-1.3H4c-1.2,0-2.1-0.9-2.1-2.1V5c0-1.2,0.9-2.1,2.1-2.1h16c1.2,0,2.1,0.9,2.1,2.1v10.5 c0,1.2-0.9,2.1-2.1,2.1h-5.9v1.3h1.7v2.2H8.1z M19.9,15.4V5.1H4.1v10.3H19.9z" />
  </Svg>
);

Regular.iconType = 'Regular';
