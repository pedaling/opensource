import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'gridsqaure2x2-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M20.4 3.65v5.5h-5.5v-5.5zM21.7 2h-8.2c-.15 0-.25.1-.25.25v8.25c0 .15.1.25.25.25h8.25c.15 0 .25-.1.25-.25V2.3c0-.15-.15-.3-.3-.3m-1.3 12.9v5.5h-5.5v-5.5zm1.3-1.65h-8.2c-.15 0-.25.1-.25.25v8.25c0 .15.1.25.25.25h8.25c.15 0 .25-.1.25-.25v-8.2c0-.15-.15-.3-.3-.3M9.1 14.9v5.5H3.6v-5.5zm1.35-1.65h-8.2c-.15 0-.25.1-.25.25v8.25c0 .15.1.25.25.25h8.25c.15 0 .25-.1.25-.25v-8.2c0-.15-.15-.3-.3-.3M9.1 3.65v5.5H3.6v-5.5zM10.45 2h-8.2C2.1 2 2 2.1 2 2.25v8.25c0 .15.1.25.25.25h8.25c.15 0 .25-.1.25-.25V2.3c0-.15-.15-.3-.3-.3" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'GridSqaure2x2Thin';
