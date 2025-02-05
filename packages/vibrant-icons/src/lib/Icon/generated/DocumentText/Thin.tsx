import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'documenttext-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path d="M8.65 15.15v1.7h6.7v-1.7zm0-4v1.7h6.7v-1.7z" />
      <Svg.Path
        fillRule="evenodd"
        d="M3.9 22.85a.25.25 0 0 1-.25-.25V1.4a.25.25 0 0 1 .25-.25h10.286l6.164 6.166V22.6a.25.25 0 0 1-.25.25zm9.58-20H5.35v18.3h13.3V8.02l-.17-.17h-4.83V3.02z"
        clipRule="evenodd"
      />
    </Svg.G>
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'DocumentTextThin';
