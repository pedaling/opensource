import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'person-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M12 14.35c-3.918 0-7.15 3.282-7.15 7.4h-2.2c0-5.27 4.155-9.6 9.35-9.6s9.35 4.33 9.35 9.6h-2.2c0-4.118-3.232-7.4-7.15-7.4M12 3.35a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8m-5.1 2.9a5.1 5.1 0 1 1 10.2 0 5.1 5.1 0 0 1-10.2 0"
      clipRule="evenodd"
    />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'PersonRegular';
