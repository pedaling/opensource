import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'pause-fill',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M14.75 20.765a.275.275 0 0 0 .3.235h2.4a.275.275 0 0 0 .3-.235V3.235a.275.275 0 0 0-.3-.235h-2.4a.275.275 0 0 0-.3.235v17.53Zm-8.5 0a.275.275 0 0 0 .3.235h2.4a.275.275 0 0 0 .3-.235V3.235A.275.275 0 0 0 8.95 3h-2.4a.275.275 0 0 0-.3.235v17.53Z" />
  </Svg>
);

Fill.iconType = 'Fill';
