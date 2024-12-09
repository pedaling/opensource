import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chevronrightcircle-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M10.414 17.968a.2.2 0 0 0 .283 0l5.826-5.828a.2.2 0 0 0 0-.283l-5.826-5.829a.2.2 0 0 0-.283 0L9.241 7.201a.2.2 0 0 0 0 .283l4.513 4.514-4.513 4.514a.2.2 0 0 0 0 .283z" />
    <Svg.Path
      fillRule="evenodd"
      d="M23.1 12C23.1 5.87 18.13.9 12 .9S.9 5.87.9 12 5.87 23.1 12 23.1 23.1 18.13 23.1 12m-20 0c0-4.908 3.993-8.9 8.9-8.9 4.908 0 8.9 3.992 8.9 8.9 0 4.907-3.993 8.9-8.9 8.9-4.908 0-8.9-3.993-8.9-8.9"
      clipRule="evenodd"
    />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'ChevronRightCircleRegular';
