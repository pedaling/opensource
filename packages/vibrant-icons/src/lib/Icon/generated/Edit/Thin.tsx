import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'edit-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M19.75 4.25a4.16 4.16 0 0 0-3-1.25c-1.1 0-2.15.4-3 1.25l-10.3 10.3q-.15.15-.15.3l-.8 5.5c-.1.6.4 1.15 1 1.15h.15l5.5-.8q.15 0 .3-.15l10.3-10.3a4.255 4.255 0 0 0 0-6M8.5 19.05l-2.55.35-1.35-1.35.35-2.55 8-8L16.5 11zM18.5 9l-.95.95L14 6.4l1-.9c.45-.45 1.1-.75 1.75-.75s1.3.25 1.75.75c1 .95 1 2.55 0 3.5" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'EditThin';
