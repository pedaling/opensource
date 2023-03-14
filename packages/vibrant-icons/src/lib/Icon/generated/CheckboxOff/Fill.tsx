import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'checkboxoff-fill',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.936 3.684C1.5 4.54 1.5 5.66 1.5 7.9v8.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748c.856.436 1.976.436 4.216.436h8.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748c.436-.856.436-1.976.436-4.216V7.9c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C19.46 1.5 18.34 1.5 16.1 1.5H7.9c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748Z"
    />
  </Svg>
);

Fill.iconType = 'Fill';
