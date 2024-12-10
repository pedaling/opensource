import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chevronupcircle-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M17.968 14.086a.2.2 0 0 0 0-.283L12.14 7.976a.2.2 0 0 0-.283 0L6.03 13.803a.2.2 0 0 0 0 .283l1.173 1.172a.2.2 0 0 0 .282 0L12 10.747l4.513 4.512a.2.2 0 0 0 .283 0z" />
    <Svg.Path
      fillRule="evenodd"
      d="M12 .9C5.87.9.9 5.87.9 12S5.87 23.1 12 23.1 23.1 18.13 23.1 12 18.13.9 12 .9m0 20c-4.907 0-8.9-3.993-8.9-8.9 0-4.908 3.993-8.9 8.9-8.9 4.908 0 8.9 3.993 8.9 8.9 0 4.908-3.992 8.9-8.9 8.9"
      clipRule="evenodd"
    />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'ChevronUpCircleRegular';
