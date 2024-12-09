import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'school-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 11.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5" />
    <Svg.Path
      fillRule="evenodd"
      d="M18.5 9.5h3.75a.5.5 0 0 1 .5.5v11.35a.5.5 0 0 1-.5.5H1.75a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .5-.5H5.5V5.43a.5.5 0 0 1 .238-.426l6-3.692a.5.5 0 0 1 .524 0l6 3.692a.5.5 0 0 1 .238.426zm2.55 1.7v8.95H2.95V11.2H7.2V6.1L12 3.147 16.8 6.1v5.1z"
      clipRule="evenodd"
    />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'SchoolThin';
