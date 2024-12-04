import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'send-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m21.9 9.35-3.85-2.5c-.15-.1-.3 0-.3.15v1.65H10c-4.3 0-7.8 3.35-8 7.6v2.5c0 .15.1.25.25.25H3.5c.15 0 .25-.1.25-.25V16.3c.2-3.3 2.9-5.9 6.25-5.9h7.75v1.65c0 .15.15.25.3.15l3.85-2.5c.15-.1.15-.3 0-.35Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'SendThin';
