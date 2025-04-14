import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'texth1-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M19.9765 22.6505V16.6915L18 18.0165V16.0895L18.044 16.06L20.0405 14.7H22.137V22.6505H19.9765Z" />
    <Svg.Path d="M13.3005 21V13.1754H4.15V21H1.75V3H4.15V10.7754H13.3V3H15.7V21H13.3005Z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'TextH1Fill';
