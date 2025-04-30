import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'checkerboardshield-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m20.035 4.906-7.997-3-.035-.013-.035.013-8.003 3-.065.025v9.071c0 .023.073 2.314 2.033 4.073 1.936 1.737 5.98 3.99 6.021 4.013l.049.027.048-.027c.04-.022 3.954-2.21 6.014-4.012C20.076 16.316 20.1 14.023 20.1 14V4.931zM7.402 16.437C6.258 15.41 6.114 14.113 6.1 13.944V11.5H12l.002-7.257 5.897 2.213v5.043L12 11.5l.003 8.074-.003.001c-1.012-.599-3.37-2.037-4.597-3.138" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'CheckerBoardShieldFill';
