import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'infinity-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M18.1649 17.1004C16.0199 17.1004 14.6349 15.7354 13.1649 14.2904L11.9999 13.1454L10.8349 14.2904C9.3649 15.7354 7.9799 17.1004 5.8349 17.1004C2.9749 17.1004 0.649902 14.8104 0.649902 12.0004C0.649902 9.19039 2.9749 6.90039 5.8349 6.90039C7.9899 6.90039 9.3799 8.27039 10.8499 9.72539L11.9999 10.8554L13.1499 9.72539C14.6199 8.27539 16.0149 6.90039 18.1649 6.90039C21.0249 6.90039 23.3499 9.19039 23.3499 12.0004C23.3499 14.8104 21.0249 17.1004 18.1649 17.1004ZM18.1649 8.60039C16.7799 8.60039 15.8099 9.48539 14.3399 10.9354L13.2599 12.0004L14.3549 13.0804C15.8149 14.5204 16.7849 15.4004 18.1649 15.4004C20.0849 15.4004 21.6499 13.8754 21.6499 12.0004C21.6499 10.1254 20.0849 8.60039 18.1649 8.60039ZM5.8349 8.60039C3.9149 8.60039 2.3499 10.1254 2.3499 12.0004C2.3499 13.8754 3.9149 15.4004 5.8349 15.4004C7.2149 15.4004 8.1799 14.5204 9.6449 13.0804L10.7399 12.0004L9.6599 10.9354C8.1949 9.48539 7.2249 8.60039 5.8349 8.60039Z" />
  </Svg>
);

Thin.iconType = 'Thin';
