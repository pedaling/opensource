import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'keyboard-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M6.375 7.5h-1.75v1.75h1.75zm-1.75 3.75h1.75V13h-1.75zM6.375 15h-1.75v1.75h1.75zm1.5-7.5h1.75v1.75h-1.75zm1.75 3.75h-1.75V13h1.75zM7.875 15h8.25v1.75h-8.25zm5-7.5h-1.75v1.75h1.75zm-1.75 3.75h1.75V13h-1.75zm5-3.75h-1.75v1.75h1.75zm-1.75 3.75h1.75V13h-1.75zm5-3.75h-1.75v1.75h1.75zm-1.75 3.75h1.75V13h-1.75zm1.75 3.75h-1.75v1.75h1.75z" />
    <Svg.Path
      fillRule="evenodd"
      d="M22.85 3.9a.25.25 0 0 0-.25-.25H1.4a.25.25 0 0 0-.25.25v16.2c0 .138.112.25.25.25h21.2a.25.25 0 0 0 .25-.25zm-20 14.749V5.351h18.3v13.298z"
      clipRule="evenodd"
    />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'KeyboardThin';
