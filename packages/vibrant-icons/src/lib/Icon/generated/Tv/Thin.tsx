import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'tv-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M142.51 407v-40H70c-20.4 0-37-16.6-37-37V110c0-20.4 16.6-37 37-37h340c20.4 0 37 16.6 37 37v220c0 20.4-16.6 37-37 37h-73.49v40h-194ZM67 333h346V107H67v226Z" />
  </Svg>
);

Thin.iconType = 'Thin';
