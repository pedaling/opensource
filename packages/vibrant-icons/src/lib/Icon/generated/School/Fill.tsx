import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'school-fill',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      d="m17.65 9.5v.85h.85 3.4999v10.6504h-20v-10.6504h3.5001.85v-.85-3.87464l5.6499-3.47692 5.6501 3.47693zm-5.65 2.85c1.8502 0 3.35-1.4998 3.35-3.35 0-1.85015-1.4998-3.35-3.35-3.35s-3.35 1.49985-3.35 3.35c0 1.8502 1.4998 3.35 3.35 3.35z"    />
  </Svg>
);

Fill.iconType = 'Fill';
