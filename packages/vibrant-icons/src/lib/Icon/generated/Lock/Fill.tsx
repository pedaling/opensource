import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'lock-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M20.75 9H18V7.2c0-3.1-2.3-5.85-5.4-6.15C9.05.7 6 3.5 6 7v2H3.25C3.1 9 3 9.1 3 9.25v13c0 .15.1.25.25.25h17.5c.15 0 .25-.1.25-.25v-13c0-.15-.1-.25-.25-.25m-7.5 8.55c0 .1-.1.2-.25.2h-2c-.15 0-.25-.1-.25-.2v-3.6c0-.1.1-.2.25-.2h2c.15 0 .25.1.25.2zM15.5 9h-7V7c0-1.95 1.55-3.5 3.5-3.5s3.5 1.55 3.5 3.5z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'LockFill';
