import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'bold-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.5 3H11.9455C13.7706 3 15.3123 3.42777 16.4223 4.22978C17.5517 5.04588 18.2 6.23152 18.2 7.6C18.2 9.3538 16.7129 11 15.3501 11.5478C16.5 11.66 17.9415 12.4156 18.5012 13.2567C18.9295 13.9004 19.1473 14.6639 19.1985 15.5283C19.3145 17.484 18.5575 18.8857 17.3451 19.7613C16.1833 20.6004 15.0783 21 13.35 21H5.5V3ZM11.05 11C12.8713 11 14.171 10.632 15.0783 10.0546C15.9338 9.51021 16.4223 8.7587 16.4223 7.6C16.4223 6.81848 15.9822 6.07045 15.2606 5.54905C14.5194 5.01355 13.5249 4.7 11.9455 4.7H7.2V11H11.05ZM7.2 12.7H11.05C13.3925 12.7 14.7918 12.8823 15.7714 13.4566C16.7031 14.0028 17.1868 14.6745 17.1868 15.5958C17.1868 17.0299 16.6969 17.7334 16.1207 18.2486C15.4103 18.8839 14.1598 19.3 13.1641 19.3H7.2V12.7Z"
    />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'BoldThin';
