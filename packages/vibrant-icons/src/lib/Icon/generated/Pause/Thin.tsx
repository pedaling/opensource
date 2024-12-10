import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'pause-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M15.25 20.765a.22.22 0 0 0 .2.235h1.6a.22.22 0 0 0 .2-.235V3.235a.22.22 0 0 0-.2-.235h-1.6a.22.22 0 0 0-.2.235zm-8.5 0a.22.22 0 0 0 .2.235h1.6a.22.22 0 0 0 .2-.235V3.235A.22.22 0 0 0 8.55 3h-1.6a.22.22 0 0 0-.2.235z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'PauseThin';
