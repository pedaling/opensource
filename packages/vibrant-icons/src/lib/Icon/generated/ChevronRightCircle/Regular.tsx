import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chevronrightcircle-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M10.4142 17.9682C10.4923 18.0463 10.619 18.0463 10.6971 17.9682L16.5235 12.1398C16.6015 12.0617 16.6015 11.9351 16.5235 11.857L10.6969 6.02829C10.6188 5.95015 10.4922 5.95015 10.4141 6.02829L9.24135 7.2014C9.16327 7.27949 9.16327 7.40609 9.24134 7.48419L13.7536 11.9982L9.24135 16.5121C9.16328 16.5902 9.16328 16.7168 9.24135 16.7949L10.4142 17.9682Z" />
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.1004 11.9999C23.1004 5.8694 18.1309 0.899902 12.0004 0.899902C5.8699 0.899902 0.899902 5.8694 0.899902 11.9999C0.899902 18.1304 5.8694 23.0999 11.9999 23.0999C18.1304 23.0999 23.1004 18.1304 23.1004 11.9999ZM3.1004 11.9999C3.1004 7.0924 7.0929 3.0999 12.0004 3.0999C16.9079 3.0999 20.8999 7.0924 20.8999 11.9999C20.8999 16.9074 16.9074 20.8999 11.9999 20.8999C7.0924 20.8999 3.1004 16.9074 3.1004 11.9999Z"
    />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'ChevronRightCircleRegular';
