import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'musicnote-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M170 432.01c-42.46 0-77-34.54-77-77s34.54-77 77-77c13.52 0 26.83 3.56 38.49 10.33l4.51 2.6V76.57l144-23.04v89.92l-107.47 17.18-2.53.41V355c0 42.46-34.54 77-77 77Zm0-120c-23.71 0-43 19.29-43 43s19.29 43 43 43 43-19.29 43-43-19.29-43-43-43Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'MusicNoteThin';
