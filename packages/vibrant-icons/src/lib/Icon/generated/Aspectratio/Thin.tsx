import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'aspectratio-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.75 10.25a.25.25 0 0 1 .25.25v8.25h5.75V5.25H3.25v5h11.5Zm-13 10.25a.25.25 0 0 1-.25-.25V3.75a.25.25 0 0 1 .25-.25h20.5a.25.25 0 0 1 .25.25v16.5a.25.25 0 0 1-.25.25H1.75Zm1.5-8.5v6.75h10V12h-10Z"
    />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'AspectratioThin';
