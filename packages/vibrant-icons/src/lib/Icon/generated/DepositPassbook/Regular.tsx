import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'depositpassbook-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.75 3H4.65c-.1 0-.2.05-.2.2l-3.4 11.85C.8 16.05 1.5 17 2.5 17h2v2.5c0 .85.65 1.5 1.5 1.5h14.5c.85 0 1.5-.65 1.5-1.5V3.25c0-.15-.1-.25-.25-.25m-18 11.5 2.5-9h12.5l-2.5 9zm3.25 4V17h9.95c.65 0 1.25-.45 1.45-1.05l1.1-4v6.55z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'DepositPassbookRegular';
