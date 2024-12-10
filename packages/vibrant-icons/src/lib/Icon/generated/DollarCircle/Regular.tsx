import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'dollarcircle-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 23.1a11.03 11.03 0 0 1-7.85-3.252C2.055 17.752.9 14.965.9 12s1.154-5.752 3.25-7.85C6.249 2.055 9.036.9 12 .9s5.752 1.154 7.848 3.25S23.1 9.036 23.1 12s-1.155 5.752-3.252 7.848A11.03 11.03 0 0 1 12 23.1m0-20c-4.908 0-8.9 3.992-8.9 8.9 0 4.907 3.992 8.9 8.9 8.9 4.907 0 8.9-3.993 8.9-8.9 0-4.908-3.993-8.9-8.9-8.9m-.975 15.25v-1.593c-1.797-.258-2.875-1.27-2.964-2.79l-.006-.115-.005-.105h2.354l.027.152c.103.534.745.895 1.596.895s1.398-.34 1.398-.865v-.006c0-.39-.223-.644-1.398-.873l-.939-.178c-1.868-.346-2.855-1.29-2.855-2.732v-.006c0-1.505 1.067-2.617 2.792-2.92V5.65h1.95v1.56c1.688.275 2.696 1.277 2.77 2.76l.012.238h-2.36l-.016-.16c-.062-.539-.61-.887-1.398-.887s-1.24.32-1.24.814v.006c0 .491.534.691 1.334.841l.94.178c2.023.39 2.925 1.23 2.925 2.726v.006c0 .81-.28 1.514-.808 2.039-.51.505-1.256.843-2.16.98v1.599z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'DollarCircleRegular';
