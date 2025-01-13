import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'documenttext-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      clipRule="evenodd"
      d="m3.6499.900391c-.13807 0-.25.111929-.25.249999v21.70001c0 .1381.11193.25.25.25h16.7c.1381 0 .25-.1119.25-.25v-15.63751l-6.311-6.312499zm9.75 7.199999v-4.977l4.9765 4.977zm-5 9.00001h7.2v-2.2h-7.2zm0-4h7.2v-2.2h-7.2z"
      fillRule="evenodd"
    />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'DocumentTextFill';
