import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chevronleftcircle-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M13.586 6.032a.2.2 0 0 0-.283 0L7.477 11.86a.2.2 0 0 0 0 .283l5.827 5.828a.2.2 0 0 0 .282 0l1.173-1.173a.2.2 0 0 0 0-.282l-4.512-4.514 4.512-4.514a.2.2 0 0 0 0-.283z" />
    <Svg.Path
      fillRule="evenodd"
      d="M.9 12c0 6.13 4.97 11.1 11.1 11.1S23.1 18.13 23.1 12 18.132.9 12 .9.9 5.87.9 12m20 0c0 4.907-3.992 8.9-8.9 8.9-4.907 0-8.9-3.993-8.9-8.9 0-4.908 3.993-8.9 8.9-8.9 4.908 0 8.9 3.992 8.9 8.9"
      clipRule="evenodd"
    />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'ChevronLeftCircleRegular';
