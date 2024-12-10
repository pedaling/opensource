import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'school-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M1.65 9.5a.5.5 0 0 0-.5.5v11.35a.5.5 0 0 0 .5.5h20.7a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.5-.5H18.5V5.43a.5.5 0 0 0-.238-.426l-6-3.693a.5.5 0 0 0-.524 0l-6 3.693a.5.5 0 0 0-.238.426V9.5zm12.725-.125a2.375 2.375 0 1 1-4.75 0 2.375 2.375 0 0 1 4.75 0"
      clipRule="evenodd"
    />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'SchoolFill';
