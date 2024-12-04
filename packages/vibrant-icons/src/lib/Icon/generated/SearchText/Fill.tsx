import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'searchtext-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M13.8 5.0999C13.9105 5.0999 14 5.01036 14 4.8999V3.0999C14 2.98945 13.9105 2.8999 13.8 2.8999H2.2C2.08954 2.8999 2 2.98945 2 3.0999V4.8999C2 5.01036 2.08954 5.0999 2.2 5.0999H13.8Z" />
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.8999 13.9486C6.8999 10.0557 10.0557 6.8999 13.9486 6.8999C17.8416 6.8999 20.9974 10.0557 20.9974 13.9486C20.9974 15.4982 20.4974 16.931 19.6499 18.0945L23.2772 21.7218L21.7216 23.2774L18.0942 19.6501C16.9308 20.4974 15.4981 20.9974 13.9486 20.9974C10.0557 20.9974 6.8999 17.8416 6.8999 13.9486ZM13.9486 9.0999C11.2708 9.0999 9.0999 11.2708 9.0999 13.9486C9.0999 16.6265 11.2708 18.7974 13.9486 18.7974C16.6265 18.7974 18.7974 16.6265 18.7974 13.9486C18.7974 11.2708 16.6265 9.0999 13.9486 9.0999Z"
    />
    <Svg.Path d="M7 9.3999C7 9.51036 6.91046 9.5999 6.8 9.5999H2.2C2.08954 9.5999 2 9.51036 2 9.3999V7.5999C2 7.48945 2.08954 7.3999 2.2 7.3999H6.8C6.91046 7.3999 7 7.48945 7 7.5999V9.3999Z" />
    <Svg.Path d="M4.8 14.0999C4.91046 14.0999 5 14.0104 5 13.8999V12.0999C5 11.9894 4.91046 11.8999 4.8 11.8999H2.2C2.08954 11.8999 2 11.9894 2 12.0999V13.8999C2 14.0104 2.08954 14.0999 2.2 14.0999H4.8Z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'SearchTextFill';
