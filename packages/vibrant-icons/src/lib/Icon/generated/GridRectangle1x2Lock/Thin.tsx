import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'gridrectangle1x2lock-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path
        fillRule="evenodd"
        d="M2.9 10.35a.25.25 0 0 1-.25-.25V2.65a.25.25 0 0 1 .25-.25h18.2a.25.25 0 0 1 .25.25v7.45a.25.25 0 0 1-.25.25zm1.45-1.7h15.3V4.1H4.35z"
        clipRule="evenodd"
      />
      <Svg.Path d="M2.9 21.6a.25.25 0 0 1-.25-.25V13.9a.25.25 0 0 1 .25-.25h8.6v1.7H4.35v4.55h7.15v1.7z" />
      <Svg.Path
        fillRule="evenodd"
        d="M14.9 14.5a2.85 2.85 0 0 1 5.7 0v.4h1.25a.25.25 0 0 1 .25.25v6.2a.25.25 0 0 1-.25.25h-8.2a.25.25 0 0 1-.25-.25v-6.2a.25.25 0 0 1 .25-.25h1.25zm5.5 5.4v-3.05h-5.3v3.05zm-1.5-5.4v.4h-2.3v-.4a1.15 1.15 0 0 1 2.3 0"
        clipRule="evenodd"
      />
    </Svg.G>
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'GridRectangle1x2LockThin';
