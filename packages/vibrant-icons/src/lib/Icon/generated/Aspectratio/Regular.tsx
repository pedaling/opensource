import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'aspectratio-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M14.75 10a.25.25 0 0 1 .25.25V18h5V6H4v4zm-13 10.5a.25.25 0 0 1-.25-.25V3.75a.25.25 0 0 1 .25-.25h20.5a.25.25 0 0 1 .25.25v16.5a.25.25 0 0 1-.25.25zm2.25-8V18h8.5v-5.5z"
      clipRule="evenodd"
    />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'AspectratioRegular';
