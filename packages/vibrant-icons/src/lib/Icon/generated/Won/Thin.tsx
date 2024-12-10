import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'won-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M22.25 10.25H20l1.4-4.95c.05-.15-.05-.3-.25-.3H19.9c-.1 0-.2.05-.25.2l-1.45 5.05h-3.85L12.9 5.2c-.05-.1-.15-.2-.25-.2H11.3c-.1 0-.2.05-.25.2L9.6 10.25H5.75L4.3 5.2c-.05-.15-.15-.2-.25-.2h-1.2c-.15 0-.3.15-.25.3L4 10.25H1.75c-.15 0-.25.1-.25.25v1.25c0 .15.1.25.25.25H4.5l2.25 7.8c.05.1.15.2.25.2h1.35c.1 0 .2-.05.25-.2l2.25-7.8h2.3l2.25 7.8c.05.1.15.2.25.2H17c.1 0 .2-.05.25-.2L19.5 12h2.75c.15 0 .25-.1.25-.25V10.5c0-.15-.1-.25-.25-.25M7.7 16.95 6.25 12H9.1zm3.65-6.7.65-2.2.65 2.2zm4.95 6.7L14.9 12h2.85z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'WonThin';
