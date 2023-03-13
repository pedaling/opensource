import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg data-testid={testId} viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm.223-16.362a.25.25 0 0 0-.447 0l-2.011 4.023-3.15-1.633a.25.25 0 0 0-.36.268l1.25 6.75a.25.25 0 0 0 .245.204h8.5a.25.25 0 0 0 .246-.204l1.25-6.75a.25.25 0 0 0-.361-.268l-3.15 1.633-2.011-4.023Z"
    />
  </Svg>
);

Fill.iconType = 'Fill';
