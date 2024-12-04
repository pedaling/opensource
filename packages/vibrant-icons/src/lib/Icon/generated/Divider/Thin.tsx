import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'divider-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M20.75 2.5H19.5c-.15 0-.25.1-.25.25v4H4.75v-4c0-.15-.1-.25-.25-.25H3.25c-.15 0-.25.1-.25.25V8.2c0 .15.15.3.3.3h17.45c.15 0 .3-.15.3-.3V2.75c-.05-.15-.15-.25-.3-.25Zm-17.5 19H4.5c.15 0 .25-.1.25-.25v-4h14.5v4c0 .15.1.25.25.25h1.25c.15 0 .25-.1.25-.25V15.8c0-.15-.15-.3-.3-.3H3.3c-.15 0-.3.15-.3.3v5.45c0 .15.1.25.25.25Zm19.5-8.6H1.25c-.15 0-.25-.1-.25-.25V11.4c0-.15.1-.25.25-.25h21.5c.15 0 .25.1.25.25v1.25c0 .1-.1.25-.25.25Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'DividerThin';
