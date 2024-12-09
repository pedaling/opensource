import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'musicnote-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M170 437c-45.22 0-82-36.78-82-82s36.78-82 82-82c13.25 0 26.32 3.23 38 9.35V72.29l151.68-24.27 2.32-.37V147.7l-110 17.6v189.69c0 45.22-36.78 82-82 82Zm0-120c-20.95 0-38 17.05-38 38s17.05 38 38 38 38-17.05 38-38-17.05-38-38-38" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'MusicNoteRegular';
