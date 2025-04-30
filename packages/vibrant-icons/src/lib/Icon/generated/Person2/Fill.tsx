import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'person2-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M6.85 0a4.475 4.475 0 1 0 0 8.95 4.475 4.475 0 0 0 0-8.95m9.75 3a3.975 3.975 0 1 0 0 7.95 3.975 3.975 0 0 0 0-7.95m0 8.75a5.1 5.1 0 0 0-3.782 1.678C11.653 11.286 9.441 9.75 6.85 9.75 3.007 9.75 0 13.128 0 16.85v2.9c0 .11.09.2.2.2h11.35a.2.2 0 0 0 .2-.2V17.3c0-.11.09-.2.2-.2h1.3c.11 0 .2.09.2.2v2.45c0 .11.09.2.2.2h7.85a.2.2 0 0 0 .2-.2v-2.9a5.1 5.1 0 0 0-5.1-5.1" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'Person2Fill';
