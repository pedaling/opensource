import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.25 9V4.25H3.75V9h16.5Zm0 10.75V15H3.75v4.75h16.5Zm1.5-9H2.25A.25.25 0 0 1 2 10.5V2.75a.25.25 0 0 1 .25-.25h19.5a.25.25 0 0 1 .25.25v7.75a.25.25 0 0 1-.25.25Zm0 10.75H2.25a.25.25 0 0 1-.25-.25V13.5a.25.25 0 0 1 .25-.25h19.5a.25.25 0 0 1 .25.25v7.75a.25.25 0 0 1-.25.25Z"
    />
  </Svg>
);
