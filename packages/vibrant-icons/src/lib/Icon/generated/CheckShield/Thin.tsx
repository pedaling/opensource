import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'checkshield-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M240.06 436.56c-11.12-6.26-82.61-46.98-118.06-78.79-37.51-33.66-38.99-77.4-39-77.83V102.08l157.06-58.87L397 102.09v177.92c0 .44-.54 44.12-38.98 77.74-37.71 33-107.06 72.65-117.97 78.82Zm-1.07-356.65L117 125.64v153.54c.25 3.12 3.07 31.16 27.72 53.29 25.32 22.71 74 52.28 93.75 63.94l1.53.89 1.53-.91c23.88-14.13 67.87-41.28 94.11-64.25 25.16-22.02 27.21-49.44 27.36-52.48V125.64L241.11 79.91l-1.06-.39zM147.9 228.05 171.95 204l49.86 49.85 2.12 2.13 2.12-2.13 82.73-82.73 23.34 23.34-108.89 108.89-75.32-75.31Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'CheckShieldThin';
