import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'video-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M2.3499 2.15039C2.23945 2.15039 2.1499 2.23993 2.1499 2.35039V21.6504C2.1499 21.7609 2.23945 21.8504 2.3499 21.8504H21.6499C21.7604 21.8504 21.8499 21.7609 21.8499 21.6504V2.35039C21.8499 2.23993 21.7604 2.15039 21.6499 2.15039H2.3499ZM9.21281 16.5031C9.14618 16.5441 9.0604 16.4962 9.0604 16.418V7.58284C9.0604 7.50461 9.14618 7.45667 9.21281 7.49767L16.392 11.9152C16.4554 11.9543 16.4554 12.0465 16.392 12.0856L9.21281 16.5031Z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'VideoFill';
