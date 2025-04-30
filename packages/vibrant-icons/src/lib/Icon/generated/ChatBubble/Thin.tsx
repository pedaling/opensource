import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chatbubble-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.199 17.756V21.2h-3.446l.003-.002A10.8 10.8 0 0 1 12 22.85C6.007 22.85 1.15 17.992 1.15 12 1.15 6.007 6.007 1.15 12 1.15S22.85 6.007 22.85 12c0 2.116-.607 4.09-1.654 5.759zM19.454 19.5l.046-.045V17.27l.278-.45A9.1 9.1 0 0 0 21.15 12c0-5.045-4.104-9.15-9.15-9.15-5.045 0-9.15 4.105-9.15 9.15 0 5.046 4.104 9.15 9.15 9.15a9.1 9.1 0 0 0 4.82-1.37l.448-.278h2.186" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'ChatBubbleThin';
