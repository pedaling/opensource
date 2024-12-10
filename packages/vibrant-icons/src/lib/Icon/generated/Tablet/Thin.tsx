import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'tablet-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M20.5 4.2h-17c-1 0-1.9.8-1.9 1.8v12c0 1 .8 1.9 1.9 1.9h17c1 0 1.9-.8 1.9-1.9V6c0-1-.9-1.8-1.9-1.8m.1 13.9H3.3V5.8h17.3zM8.1 16c0-.5.4-.9.9-.9h6c.5 0 .9.4.9.9s-.4.9-.9.9H9c-.5 0-.9-.4-.9-.9" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'TabletThin';
