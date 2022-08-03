import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.75 10a.25.25 0 0 1 .25.25V18h5V6H4v4h10.75Zm-13 10.5a.25.25 0 0 1-.25-.25V3.75a.25.25 0 0 1 .25-.25h20.5a.25.25 0 0 1 .25.25v16.5a.25.25 0 0 1-.25.25H1.75Zm2.25-8V18h8.5v-5.5H4Z"
    />
  </Svg>
);
