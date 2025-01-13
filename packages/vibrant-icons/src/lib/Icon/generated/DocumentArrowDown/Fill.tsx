import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'documentarrowdown-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      clipRule="evenodd"
      d="m3.6499.899902c-.13807 0-.25.111928-.25.249998v21.7c0 .1381.11193.25.25.25h16.7c.1381 0 .25-.1119.25-.25v-15.6375l-6.311-6.312498zm9.75 7.199998v-4.977l4.9765 4.977zm3.3 7.3501-4.6999 4.15-4.70007-4.15 1.2-1.2 2.65007 2.61.0003-5.61h1.7l-.0003 5.61 2.6499-2.61z"
      fillRule="evenodd"
    />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'DocumentArrowDownFill';
