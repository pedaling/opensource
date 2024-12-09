import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'person2-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M7 .9a4.475 4.475 0 1 0 0 8.95A4.475 4.475 0 0 0 7 .9M4.725 5.375a2.275 2.275 0 1 1 4.55 0 2.275 2.275 0 0 1-4.55 0M16.75 3.9a3.975 3.975 0 1 0 0 7.95 3.975 3.975 0 0 0 0-7.95m-1.775 3.975a1.775 1.775 0 1 1 3.55 0 1.775 1.775 0 0 1-3.55 0"
      clipRule="evenodd"
    />
    <Svg.Path
      fillRule="evenodd"
      d="M.35 20.85a.2.2 0 0 1-.2-.2v-2.9c0-3.722 3.007-7.1 6.85-7.1 2.591 0 4.803 1.536 5.968 3.678a5.1 5.1 0 0 1 8.882 3.422v2.9a.2.2 0 0 1-.2.2zm16.4-6a2.9 2.9 0 0 0-2.9 2.898v.902h5.8v-.9a2.9 2.9 0 0 0-2.9-2.9m-5.1 3.8h-9.3v-.9c0-2.63 2.141-4.9 4.65-4.9 2.508 0 4.65 2.27 4.65 4.9z"
      clipRule="evenodd"
    />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'Person2Regular';
