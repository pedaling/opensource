import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'monitor-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M167.51 417v-34H203v-36H80c-20.4 0-37-16.6-37-37V100c0-20.4 16.6-37 37-37h320c20.4 0 37 16.6 37 37v210c0 20.4-16.6 37-37 37H277v36h34.51v34h-144ZM77 313h326V97H77v216Z" />
  </Svg>
);

Thin.iconType = 'Thin';
