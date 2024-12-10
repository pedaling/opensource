import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'volume-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M7.22 18.35H.9V5.65h6.32L14.6.815v22.37zm11.356.368.07-.071A9.34 9.34 0 0 0 21.4 12a9.34 9.34 0 0 0-2.753-6.646l-.07-.071 1.555-1.556.07.07A11.52 11.52 0 0 1 23.6 12c0 3.099-1.206 6.011-3.397 8.203l-.071.07zm-2.828-2.829.07-.07c1.02-1.02 1.582-2.377 1.582-3.82s-.562-2.798-1.582-3.818l-.07-.07 1.555-1.556.071.07A7.55 7.55 0 0 1 19.6 12a7.55 7.55 0 0 1-2.226 5.374l-.07.07z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'VolumeFill';
