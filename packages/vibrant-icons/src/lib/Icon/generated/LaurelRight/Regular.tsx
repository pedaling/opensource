import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'laurelright-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M9.99 8.379c.574-.212 1.316-1.048 1.575-2.014s.034-2.061-.357-2.532c-.574.212-1.316 1.048-1.575 2.014s-.035 2.061.357 2.532m-.685 2.557c1.578-.095 3.545-1.639 4.192-4.054s-.285-4.734-1.604-5.606C10.315 1.371 8.348 2.915 7.7 5.33s.284 4.734 1.604 5.606m3.506 2.148c.502.349 1.613.477 2.552.135s1.709-1.154 1.87-1.745c-.503-.349-1.614-.477-2.553-.135s-1.709 1.154-1.87 1.745m-2.488.905c.983 1.239 3.375 1.964 5.725 1.11 2.349-.856 3.715-2.95 3.672-4.53-.983-1.239-3.375-1.964-5.725-1.109s-3.715 2.949-3.672 4.53M8.892 19c.353.5 1.353 1 2.353 1s2-.5 2.353-1c-.353-.5-1.353-1-2.353-1s-2 .5-2.353 1m-2.647 0c.5 1.5 2.5 3 5 3s4.5-1.5 5-3c-.5-1.5-2.5-3-5-3s-4.5 1.5-5 3"
      clipRule="evenodd"
    />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'LaurelRightRegular';
