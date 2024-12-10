import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'volume-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M7.294 18.1H1.15V5.9h6.144l7.056-4.623v21.445zm5.356 1.476V4.423L7.802 7.6H2.85v8.8h4.952zm6.278-.86A9.58 9.58 0 0 0 21.65 12a9.58 9.58 0 0 0-2.722-6.717l1.203-1.203A11.28 11.28 0 0 1 23.35 12c0 2.981-1.142 5.787-3.22 7.92zM16.1 15.889A5.6 5.6 0 0 0 17.65 12a5.6 5.6 0 0 0-1.55-3.888l1.202-1.202A7.3 7.3 0 0 1 19.35 12a7.3 7.3 0 0 1-2.048 5.09z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'VolumeThin';
