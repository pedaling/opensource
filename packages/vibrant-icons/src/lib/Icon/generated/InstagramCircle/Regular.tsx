import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'instagramcircle-regular',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 3.5c4.7 0 8.5 3.8 8.5 8.5s-3.8 8.5-8.5 8.5-8.5-3.8-8.5-8.5S7.3 3.5 12 3.5ZM12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Z" />
    <Svg.Path d="M12 10.2c-.95 0-1.75.8-1.75 1.75s.8 1.75 1.75 1.75 1.75-.8 1.75-1.75-.8-1.75-1.75-1.75Z" />
    <Svg.Path d="M16.4 7.6c-.55-.55-1.3-.85-2.2-.85H9.85C8 6.75 6.75 8 6.75 9.85v4.35c0 .9.3 1.7.85 2.25s1.35.85 2.2.85h4.3c.85 0 1.65-.3 2.2-.85.55-.55.85-1.35.85-2.25V9.85c.1-.95-.2-1.7-.75-2.25ZM12 14.65c-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.25-2.7 2.7-2.7 1.45 0 2.75 1.2 2.75 2.7 0 1.5-1.25 2.7-2.75 2.7Zm2.8-4.85c-.35 0-.65-.3-.65-.65 0-.35.3-.65.65-.65.35 0 .65.3.65.65 0 .35-.3.65-.65.65Z" />
  </Svg>
);

Regular.iconType = 'Regular';
