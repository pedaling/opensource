import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm5 6.3-1.95 7.45c-.05.15-.15.3-.35.35L7.3 17h-.05c-.15 0-.25-.15-.2-.3L8.65 9c.05-.15.15-.3.35-.35L16.7 7h.05c.15 0 .3.15.25.3Z" />
  </Svg>
);
