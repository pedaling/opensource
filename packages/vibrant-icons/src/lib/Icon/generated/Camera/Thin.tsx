import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'camera-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M20.25 3.75v16.5H3.75V3.75h16.5ZM21.7 2H2.25C2.1 2 2 2.1 2 2.25v19.5c0 .15.1.25.25.25h19.5c.15 0 .25-.1.25-.25V2.3c0-.15-.15-.3-.3-.3Z" />
    <Svg.Path d="M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3Zm0-1.75C9.4 7.25 7.25 9.4 7.25 12S9.4 16.75 12 16.75s4.75-2.15 4.75-4.75S14.6 7.25 12 7.25ZM17 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
  </Svg>
);

Thin.iconType = 'Thin';
