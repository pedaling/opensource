import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'musicnote-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M8.5 21.6a3.854 3.854 0 0 1-3.85-3.85A3.854 3.854 0 0 1 8.5 13.9a3.83 3.83 0 0 1 1.924.517l.226.13V3.828l7.2-1.152v4.496l-5.374.86-.126.02v9.698A3.854 3.854 0 0 1 8.5 21.6m0-6c-1.186 0-2.15.965-2.15 2.15s.964 2.15 2.15 2.15 2.15-.964 2.15-2.15-.965-2.15-2.15-2.15" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'MusicNoteThin';
