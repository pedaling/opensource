import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'mobile-regular',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M140 452c-23.16 0-42-18.84-42-42V70c0-23.16 18.84-42 42-42h200c23.16 0 42 18.84 42 42v340c0 23.16-18.84 42-42 42H140Zm198-44V72H142v336h196Zm-68-276c12.13 0 22-9.87 22-22s-9.87-22-22-22h-60c-12.13 0-22 9.87-22 22s9.87 22 22 22h60Z" />
  </Svg>
);

Regular.iconType = 'Regular';
