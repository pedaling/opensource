import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'playcircle-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 22.85a10.78 10.78 0 0 1-7.673-3.178A10.78 10.78 0 0 1 1.15 12c0-2.899 1.129-5.623 3.177-7.673A10.78 10.78 0 0 1 12 1.15c2.898 0 5.623 1.129 7.672 3.177A10.78 10.78 0 0 1 22.85 12c0 2.898-1.13 5.623-3.178 7.672A10.78 10.78 0 0 1 12 22.85m0-20c-5.046 0-9.15 4.104-9.15 9.15 0 5.045 4.104 9.15 9.15 9.15 5.045 0 9.15-4.105 9.15-9.15 0-5.046-4.105-9.15-9.15-9.15M9.65 8.447a.1.1 0 0 1 .152-.085l5.774 3.553a.1.1 0 0 1 0 .17l-5.774 3.553a.1.1 0 0 1-.152-.085z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'PlayCircleThin';
