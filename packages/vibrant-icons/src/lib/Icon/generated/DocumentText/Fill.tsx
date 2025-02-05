import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'documenttext-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M3.65.9a.25.25 0 0 0-.25.25v21.7c0 .138.112.25.25.25h16.7a.25.25 0 0 0 .25-.25V7.213L14.289.9zm9.75 7.2V3.123L18.376 8.1zm-5 9h7.2v-2.2H8.4zm0-4h7.2v-2.2H8.4z"
      clipRule="evenodd"
    />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'DocumentTextFill';
