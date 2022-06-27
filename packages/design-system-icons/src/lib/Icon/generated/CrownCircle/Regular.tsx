import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Regular: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M12.223 6.638a.25.25 0 0 0-.447 0l-2.011 4.023-3.15-1.633a.25.25 0 0 0-.36.268l1.25 6.75a.25.25 0 0 0 .245.204h8.5a.25.25 0 0 0 .246-.204l1.25-6.75a.25.25 0 0 0-.361-.268l-3.15 1.633-2.011-4.023Z" />
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 12C1 5.9 5.9 1 12 1s11 4.9 11 11-4.9 11-11 11S1 18.1 1 12Zm19.5 0c0-4.7-3.8-8.5-8.5-8.5S3.5 7.3 3.5 12s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5Z"
    />
  </Svg>
);
