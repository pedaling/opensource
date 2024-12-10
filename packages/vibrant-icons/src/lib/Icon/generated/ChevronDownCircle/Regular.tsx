import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chevrondowncircle-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M6.041 10.414a.2.2 0 0 0 0 .283l5.829 5.827a.2.2 0 0 0 .283 0l5.828-5.827a.2.2 0 0 0 0-.283l-1.173-1.173a.2.2 0 0 0-.283 0l-4.514 4.513L7.497 9.24a.2.2 0 0 0-.282 0z" />
    <Svg.Path
      fillRule="evenodd"
      d="M12 23.1c6.13 0 11.1-4.97 11.1-11.1S18.13.9 12 .9.9 5.87.9 12 5.87 23.1 12 23.1m0-20c4.907 0 8.9 3.993 8.9 8.9 0 4.908-3.993 8.9-8.9 8.9-4.908 0-8.9-3.993-8.9-8.9 0-4.908 3.992-8.9 8.9-8.9"
      clipRule="evenodd"
    />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'ChevronDownCircleRegular';
