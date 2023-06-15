import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'laptop-fill',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M50 412c-23.16 0-42-18.84-42-42v-12h145.39l.53 1.2c3.67 8.38 11.94 13.8 21.08 13.8h130c9.14 0 17.42-5.42 21.08-13.8l.53-1.2H472v12c0 23.16-18.84 42-42 42H50Zm-2-70V110c0-23.16 18.84-42 42-42h300c23.16 0 42 18.84 42 42v232H48Z" />
  </Svg>
);

Fill.iconType = 'Fill';
