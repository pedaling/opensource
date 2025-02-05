import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'laurelright-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M9.82 9.004c.87-.349 1.749-1.119 2.129-2.536s.003-2.523-.576-3.26c-.87.349-1.75 1.119-2.129 2.536-.38 1.417-.003 2.523.576 3.26m-.518 1.932c1.579-.095 3.545-1.639 4.192-4.054s-.284-4.734-1.604-5.606c-1.577.095-3.544 1.639-4.19 4.054s.284 4.734 1.603 5.606m2.898 2.619c.785.513 1.92.791 3.298.29s2.07-1.445 2.34-2.342c-.784-.513-1.919-.791-3.297-.29s-2.07 1.445-2.34 2.342m-1.879.684c.983 1.239 3.375 1.964 5.725 1.11 2.349-.856 3.715-2.95 3.672-4.53-.983-1.239-3.375-1.964-5.725-1.109s-3.715 2.949-3.672 4.53m-2.08 5.01c.561.75 1.533 1.4 3 1.4s2.438-.65 3-1.4c-.562-.75-1.533-1.4-3-1.4s-2.439.65-3 1.4m-2 0c.5 1.5 2.5 3 5 3s4.5-1.5 5-3c-.5-1.5-2.5-3-5-3s-4.5 1.5-5 3"
      clipRule="evenodd"
    />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'LaurelRightThin';
