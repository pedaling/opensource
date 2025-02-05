import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'document-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M3.9 1.15a.25.25 0 0 0-.25.25v21.2c0 .138.112.25.25.25h16.2a.25.25 0 0 0 .25-.25V7.316L14.186 1.15zm1.45 1.7h8.13l.17.17v4.83h4.83l.17.17v13.13H5.35z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'DocumentThin';
