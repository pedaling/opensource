import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M15.8 11.8c.15.1.15.3 0 .4l-2.95 1.9L10 16c-.2.1-.4 0-.4-.2V8.2c0-.2.25-.3.4-.2l2.85 1.85 2.95 1.95Z" />
    <Svg.Path d="M20.25 3.75v16.5H3.75V3.75h16.5ZM21.7 2H2.3c-.2 0-.3.15-.3.3v19.45c0 .1.1.25.3.25h19.45c.15 0 .3-.15.3-.3V2.3c-.05-.15-.2-.3-.35-.3Z" />
  </Svg>
);

Thin.iconType = 'Thin';
