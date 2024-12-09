import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'add-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.25 11.1H12.9V2.75c0-.15-.1-.25-.25-.25H11.4c-.15 0-.25.1-.25.25v8.4h-8.4c-.15 0-.25.1-.25.25v1.25c0 .15.1.25.25.25h8.4v8.4c0 .15.1.25.25.25h1.25c.15 0 .25-.1.25-.25v-8.4h8.4c.15 0 .25-.1.25-.25V11.4c-.05-.15-.15-.3-.3-.3" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'AddThin';
