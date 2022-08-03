import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M12.223 6.638a.25.25 0 0 0-.447 0l-2.011 4.023-3.15-1.633a.25.25 0 0 0-.36.268l1.25 6.75a.25.25 0 0 0 .245.204h8.5a.25.25 0 0 0 .246-.204l1.25-6.75a.25.25 0 0 0-.361-.268l-3.15 1.633-2.011-4.023Z" />
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 12C1 5.9 5.9 1 12 1s11 4.9 11 11-4.9 11-11 11S1 18.1 1 12Zm20.25 0c0-5.1-4.15-9.25-9.25-9.25S2.75 6.9 2.75 12 6.9 21.25 12 21.25s9.25-4.15 9.25-9.25Z"
    />
  </Svg>
);
