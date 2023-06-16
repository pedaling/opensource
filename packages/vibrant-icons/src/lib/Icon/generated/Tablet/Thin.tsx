import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'tablet-thin',
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
    <Svg.Path d="M20.5,4.2h-17C2.5,4.2,1.6,5,1.6,6v12c0,1,0.8,1.9,1.9,1.9h17c1,0,1.9-0.8,1.9-1.9V6C22.4,5,21.5,4.2,20.5,4.2z M20.6,18.1 H3.3V5.8h17.3V18.1z M8.1,16c0-0.5,0.4-0.9,0.9-0.9h6c0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9H9C8.5,16.9,8.1,16.5,8.1,16z" />
  </Svg>
);

Thin.iconType = 'Thin';
