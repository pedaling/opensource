import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'documentarrowdown-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M3.65.9a.25.25 0 0 0-.25.25v21.7c0 .138.112.25.25.25h16.7a.25.25 0 0 0 .25-.25V7.212L14.289.9zm9.75 7.2V3.123L18.376 8.1zm3.3 7.35L12 19.6l-4.7-4.15 1.2-1.2 2.65 2.61v-5.61h1.7v5.61l2.65-2.61z"
      clipRule="evenodd"
    />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'DocumentArrowDownFill';
