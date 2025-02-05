import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'laurelleft-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M14.173 9.004c-.87-.349-1.75-1.118-2.129-2.536-.38-1.417-.003-2.523.576-3.26.87.349 1.749 1.119 2.129 2.536s.003 2.523-.576 3.26m.517 1.932c-1.578-.095-3.544-1.639-4.191-4.053-.648-2.415.284-4.735 1.603-5.607 1.578.095 3.545 1.639 4.192 4.054s-.284 4.734-1.604 5.606m-2.899 2.62c-.784.512-1.919.79-3.298.289-1.378-.502-2.069-1.445-2.34-2.342.784-.513 1.92-.791 3.298-.29s2.069 1.445 2.34 2.342zm1.88.683c-.983 1.239-3.376 1.964-5.725 1.11-2.35-.856-3.715-2.95-3.672-4.53.983-1.238 3.375-1.964 5.724-1.109s3.716 2.949 3.673 4.53zm2.079 5.011c-.562.75-1.533 1.4-3 1.4s-2.438-.65-3-1.4c.562-.75 1.533-1.4 3-1.4s2.438.65 3 1.4m2 0c-.5 1.5-2.5 3-5 3s-4.5-1.5-5-3c.5-1.5 2.5-3 5-3s4.5 1.5 5 3"
      clipRule="evenodd"
    />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'LaurelLeftThin';
