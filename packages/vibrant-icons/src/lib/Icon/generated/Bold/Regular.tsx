import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'bold-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9455 2.75H5.25V21.25H13.35C15.1302 21.25 16.2865 20.8342 17.4915 19.964C18.776 19.0363 19.5689 17.551 19.4481 15.5135C19.3942 14.605 19.0247 13.5808 18.4592 12.9524C17.8802 12.3091 16.844 11.696 15.5927 11.4289C16.1178 11.1798 16.6565 10.8437 17.1229 10.4169C17.8745 9.72883 18.45 8.79198 18.45 7.6C18.45 6.1451 17.758 4.88651 16.5687 4.02714C15.4044 3.18592 13.8067 2.75 11.9455 2.75ZM7.45 10.75V4.95H11.9455C13.491 4.95 14.4286 5.25633 15.1142 5.75169C15.7857 6.23691 16.1723 6.91559 16.1723 7.6C16.1723 8.1429 16.0582 8.57632 15.854 8.93361C15.6494 9.29159 15.3457 9.58808 14.9441 9.84366C14.0882 10.3883 12.8392 10.75 11.05 10.75H7.45ZM7.45 19.05V12.95H11.05C13.3951 12.95 14.7303 13.136 15.645 13.6723C16.0897 13.933 16.411 14.2142 16.6213 14.5255C16.8293 14.8334 16.9368 15.1824 16.9368 15.5958C16.9368 16.2838 16.8194 16.781 16.643 17.1616C16.4669 17.5415 16.2251 17.8199 15.9541 18.0622C15.2969 18.6499 14.1092 19.05 13.1641 19.05H7.45Z"
    />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'BoldRegular';
