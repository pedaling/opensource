import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'divider-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M19.8999 21.6004V17.3504H4.0999V21.6004H2.3999V15.6504H21.5999V21.6004H19.8999ZM1.1499 12.8504V11.1504H22.8499V12.8504H1.1499ZM2.3999 8.35039V2.40039H4.0999V6.65039H19.8999V2.40039H21.5999V8.35039H2.3999Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'DividerThin';
