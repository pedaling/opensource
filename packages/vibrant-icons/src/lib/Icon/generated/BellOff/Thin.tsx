import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'belloff-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M6.01233 17H13.8123L15.3123 18.5H3.26233C3.11233 18.5 3.01233 18.4 3.01233 18.25V17.25C3.01233 17.1 3.11233 17 3.26233 17H4.51233V7.69999L6.01233 9.14999V17Z" />
    <Svg.Path d="M2.06228 2.8L2.76228 2.1C2.86228 2 3.01228 2 3.11228 2.1L5.61228 4.6C6.96228 2.45 9.31228 1 12.0123 1C16.1123 1 19.5123 4.4 19.5123 8.5V17H20.7623C20.9123 17 21.0123 17.1 21.0123 17.25V18.25C21.0123 18.4 20.9123 18.5 20.7623 18.5H19.5623L21.9123 20.85C22.0123 20.95 22.0123 21.1 21.9123 21.2L21.2123 21.9C21.1123 22 20.9623 22 20.8623 21.9L2.06228 3.15C2.01228 3.05 2.01228 2.9 2.06228 2.8ZM18.0123 8.5C18.0123 5.2 15.3123 2.5 12.0123 2.5C9.71228 2.5 7.76228 3.8 6.71228 5.65L18.0123 16.95V8.5Z" />
    <Svg.Path d="M12.0124 23C11.184 23 10.5124 22.3284 10.5124 21.5C10.5124 20.6716 11.184 20 12.0124 20C12.8408 20 13.5124 20.6716 13.5124 21.5C13.5124 22.3284 12.8408 23 12.0124 23Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'BellOffThin';
