import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'volumemute-fill',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m8.75 19.35 5.85-5.85v9.68l-5.85-3.83ZM.86 21.59l3.24-3.24H.9V5.65h6.32L14.6.82v7.02L21.59.86l1.56 1.56L2.41 23.14.85 21.58Zm17.72-2.87.07-.07c1.78-1.78 2.75-4.14 2.75-6.65 0-1.47-.34-2.88-1-4.2l-.03-.06 1.62-1.62.07.11c1.01 1.76 1.55 3.75 1.55 5.77 0 3.1-1.21 6.01-3.4 8.2l-.07.07-1.56-1.56Zm-2.83-2.83.07-.07c1.02-1.02 1.58-2.38 1.58-3.82 0-.37-.04-.74-.12-1.12v-.05l1.74-1.75.06.14c.35.89.53 1.82.53 2.77 0 2.03-.79 3.94-2.23 5.37l-.07.07-1.56-1.56Z" />
  </Svg>
);

Fill.iconType = 'Fill';
