import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'person2-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M8 2.15a4.35 4.35 0 1 0 0 8.7 4.35 4.35 0 0 0 0-8.7M5.35 6.5a2.65 2.65 0 1 1 5.3 0 2.65 2.65 0 0 1-5.3 0M17.75 5.15a3.85 3.85 0 1 0 0 7.7 3.85 3.85 0 0 0 0-7.7M15.6 9a2.15 2.15 0 1 1 4.3 0 2.15 2.15 0 0 1-4.3 0"
      clipRule="evenodd"
    />
    <Svg.Path
      fillRule="evenodd"
      d="M1.6 21.6a.2.2 0 0 1-.2-.2v-3.15a6.6 6.6 0 0 1 12.578-2.8A4.85 4.85 0 0 1 22.6 18.5v2.9a.2.2 0 0 1-.2.2zm16.15-6.25a3.15 3.15 0 0 0-3.15 3.147V19.9h6.3v-1.4a3.15 3.15 0 0 0-3.15-3.15M12.9 19.9H3.1v-1.65a4.9 4.9 0 0 1 9.8 0z"
      clipRule="evenodd"
    />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'Person2Thin';
