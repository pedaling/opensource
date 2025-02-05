import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'documentarrowdown-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path d="M16.6 14.95 12 19l-4.6-4.05 1.1-1.2 2.75 2.75v-5.75h1.5v5.75l2.75-2.75z" />
      <Svg.Path
        fillRule="evenodd"
        d="M3.9 22.85a.25.25 0 0 1-.25-.25V1.4a.25.25 0 0 1 .25-.25h10.286l6.164 6.166V22.6a.25.25 0 0 1-.25.25zm9.58-20H5.35v18.3h13.3V8.02l-.17-.17h-4.83V3.019z"
        clipRule="evenodd"
      />
    </Svg.G>
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'DocumentArrowDownThin';
