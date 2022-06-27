import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm.223-16.362a.25.25 0 0 0-.447 0l-2.011 4.023-3.15-1.633a.25.25 0 0 0-.36.268l1.25 6.75a.25.25 0 0 0 .245.204h8.5a.25.25 0 0 0 .246-.204l1.25-6.75a.25.25 0 0 0-.361-.268l-3.15 1.633-2.011-4.023Z"
    />
  </Svg>
);
