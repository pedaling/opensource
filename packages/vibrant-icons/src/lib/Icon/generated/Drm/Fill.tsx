import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'drm-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M7.668 10.738c.079.306.119.724.119 1.24v.01c0 .536-.04.969-.12 1.285q-.115.466-.332.664a.76.76 0 0 1-.528.193h-.198V9.9h.198a.76.76 0 0 1 .526.19q.218.196.335.647m3.566-.932h-.328v1.94h.328q.286 0 .421-.224c.096-.156.144-.407.144-.744v-.01q0-.502-.145-.739a.46.46 0 0 0-.42-.223M21.1 2.9v18.2H2.9V2.9zM9.235 11.978c0-.805-.086-1.478-.257-2.001-.173-.528-.43-.928-.765-1.187-.337-.26-.754-.392-1.24-.392H5.178v7.235h1.793c.487 0 .905-.138 1.242-.41.335-.27.592-.681.764-1.22.17-.535.258-1.213.258-2.015zm4.146 3.655-.86-2.972q.343-.26.536-.76c.132-.342.2-.754.2-1.226v-.01c0-.479-.069-.891-.202-1.228a1.6 1.6 0 0 0-.614-.776c-.272-.175-.614-.263-1.017-.263H9.48v7.234h1.425V13.04h.266l.703 2.592zm5.444-7.235h-1.8l-.8 4.504-.798-4.504h-1.803v7.235h1.255V11.27l.792 4.362h1.111l.784-4.346v4.346h1.26z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'DrmFill';
