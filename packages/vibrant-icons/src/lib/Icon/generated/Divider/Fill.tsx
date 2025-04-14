import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'divider-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M19.6499 21.8504V17.6004H4.3499V21.8504H2.1499V15.4004H21.8499V21.8504H19.6499ZM0.899902 13.1004V10.9004H23.0999V13.1004H0.899902ZM2.1499 8.60039V2.15039H4.3499V6.40039H19.6499V2.15039H21.8499V8.60039H2.1499Z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'DividerFill';
