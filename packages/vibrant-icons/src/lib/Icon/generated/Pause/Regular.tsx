import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'pause-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M14.75 20.765a.275.275 0 0 0 .3.235h2.4a.275.275 0 0 0 .3-.235V3.235a.275.275 0 0 0-.3-.235h-2.4a.275.275 0 0 0-.3.235zm-8.5 0a.275.275 0 0 0 .3.235h2.4a.275.275 0 0 0 .3-.235V3.235A.275.275 0 0 0 8.95 3h-2.4a.275.275 0 0 0-.3.235z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'PauseRegular';
