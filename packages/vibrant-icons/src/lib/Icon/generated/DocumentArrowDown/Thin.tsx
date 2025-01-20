import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'documentarrowdown-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path d="m16.6 14.95-4.6 4.05-4.59998-4.05 1.09993-1.2 2.74965 2.75.0004-5.75h1.5002l-.0002 5.75 2.7499-2.75z" />
      <Svg.Path
        clipRule="evenodd"
        d="m3.8999 22.8499c-.13807 0-.25-.1119-.25-.25v-21.2c0-.13807.11193-.25.25-.25h10.286l6.164 6.166v15.284c0 .1381-.1119.25-.25.25zm9.581-20h-8.131v18.3h13.3v-13.13l-.17-.17h-4.83v-4.831z"
        fillRule="evenodd"
      />
    </Svg.G>
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'DocumentArrowDownThin';
