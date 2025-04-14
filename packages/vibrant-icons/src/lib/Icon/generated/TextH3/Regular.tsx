import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'texth3-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M13.3005 21V13.1754H4.15V21H1.75V3H4.15V10.7754H13.3V3H15.7V21H13.3005Z" />
    <Svg.Path d="M17.0999 20.5564C17.2189 22.0349 18.4974 22.9904 20.3574 22.9904C22.3564 22.9904 23.6474 22.0264 23.6474 20.5329V20.5219C23.6474 19.5774 23.0474 18.9124 22.0219 18.6924C22.8349 18.4019 23.3414 17.7399 23.3414 16.9289V16.9179C23.3414 15.6074 22.0934 14.7609 20.3414 14.7609C18.5894 14.7609 17.3884 15.6954 17.2824 17.1419L17.2689 17.3239H19.2549L19.2694 17.1859C19.3189 16.7179 19.7339 16.4269 20.3409 16.4269C20.9479 16.4269 21.3099 16.7104 21.3099 17.1864V17.1974C21.3099 17.6954 20.8814 18.0049 20.1909 18.0049H19.2584V19.5424H20.2014C21.2829 19.5424 21.4444 20.0854 21.4444 20.4089V20.4199C21.4444 20.9174 20.9884 21.2384 20.3519 21.2384C19.7154 21.2384 19.2459 20.9534 19.1829 20.5249L19.1569 20.3844H17.0854L17.0999 20.5564Z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'TextH3Regular';
