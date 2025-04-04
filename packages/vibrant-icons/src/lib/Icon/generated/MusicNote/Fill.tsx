import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'musicnote-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M170 437c-45.22 0-82-36.78-82-82s36.78-82 82-82c13.25 0 26.32 3.23 38 9.35V72.29l151.68-24.27 2.32-.37V147.7l-110 17.6v189.69c0 45.22-36.78 82-82 82Z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'MusicNoteFill';
