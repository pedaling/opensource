import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'document-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m3.6499 23.1004c-.13807 0-.25-.1119-.25-.25v-21.70001c0-.13807.11193-.249999.25-.249999h10.639l6.311 6.312499v15.63751c0 .1381-.1119.25-.25.25zm9.75-19.97701v4.977h4.9765z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'DocumentFill';
