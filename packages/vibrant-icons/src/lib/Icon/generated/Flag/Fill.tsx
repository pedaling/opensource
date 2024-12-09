import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'flag-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m18.5 8 3.45-5.65c.05-.05.05-.1.05-.1 0-.15-.1-.25-.25-.25H3.25C3.1 2 3 2.1 3 2.25v19.5c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25V14h16.25c.15 0 .25-.1.25-.25 0-.05 0-.1-.05-.1z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'FlagFill';
