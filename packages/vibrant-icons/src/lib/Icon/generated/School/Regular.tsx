import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'school-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M5.25 9.15V5.435a.5.5 0 0 1 .245-.43l6.25-3.704a.5.5 0 0 1 .51 0l6.25 3.704a.5.5 0 0 1 .245.43V9.15h3.6a.5.5 0 0 1 .5.5v11.7a.5.5 0 0 1-.5.5H1.65a.5.5 0 0 1-.5-.5V9.65a.5.5 0 0 1 .5-.5zm2.2-2.746L12 3.708l4.55 2.696v4.946h4.1v8.3H3.35v-8.3h4.1z"
      clipRule="evenodd"
    />
    <Svg.Path d="M12 11.75A2.375 2.375 0 1 0 12 7a2.375 2.375 0 0 0 0 4.75" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'SchoolRegular';
