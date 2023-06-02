import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'checkerboardshield-fill',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m400.7 98.12-159.94-60-.7-.26-.7.26-160.06 60-1.3.49v181.43c0 .46 1.47 46.27 40.67 81.45 38.72 34.74 119.61 79.81 120.42 80.26l.97.54.97-.54c.78-.44 79.08-44.19 120.28-80.24 40.22-35.19 40.68-81.05 40.68-81.51V98.62l-1.3-.49ZM148.05 328.74c-22.89-20.55-25.77-46.48-26.05-49.86V230h118l.04-145.14 117.95 44.25v100.87l-118 .02.05 161.47-.05.03c-20.25-11.98-67.42-40.75-91.95-62.76Z" />
  </Svg>
);

Fill.iconType = 'Fill';
