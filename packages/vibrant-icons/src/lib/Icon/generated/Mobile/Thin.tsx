import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'mobile-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M140 447c-20.4 0-37-16.6-37-37V70c0-20.4 16.6-37 37-37h200c20.4 0 37 16.6 37 37v340c0 20.4-16.6 37-37 37H140Zm-3-34h206V67H137v346Zm133-286c9.38 0 17-7.62 17-17s-7.62-17-17-17h-60c-9.38 0-17 7.62-17 17s7.62 17 17 17h60Z" />
  </Svg>
);

Thin.iconType = 'Thin';
