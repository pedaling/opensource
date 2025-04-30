import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'keyboard-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M6.375 7.5h-1.75v1.75h1.75zm-1.75 3.75h1.75V13h-1.75zM6.375 15h-1.75v1.75h1.75zm1.5-7.5h1.75v1.75h-1.75zm1.75 3.75h-1.75V13h1.75zM7.875 15h8.25v1.75h-8.25zm5-7.5h-1.75v1.75h1.75zm-1.75 3.75h1.75V13h-1.75zm5-3.75h-1.75v1.75h1.75zm-1.75 3.75h1.75V13h-1.75zm5-3.75h-1.75v1.75h1.75zm-1.75 3.75h1.75V13h-1.75zm1.75 3.75h-1.75v1.75h1.75z" />
    <Svg.Path
      fillRule="evenodd"
      d="M23.1 3.65a.25.25 0 0 0-.25-.25H1.15a.25.25 0 0 0-.25.25v16.7c0 .138.112.25.25.25h21.7a.25.25 0 0 0 .25-.25zM3.1 18.4V5.601h17.8v12.798z"
      clipRule="evenodd"
    />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'KeyboardRegular';
