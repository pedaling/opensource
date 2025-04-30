import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alphabetapoint-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M13.42 2.384a.2.2 0 0 0-.19-.134h-2.466a.2.2 0 0 0-.188.134L3.99 21.234a.2.2 0 0 0 .19.266h1.467a.2.2 0 0 0 .189-.133l1.957-5.517h7.716a4.7 4.7 0 0 1 2.14-1.354zm2.178 11.766L11.998 4 8.397 14.15z"
      clipRule="evenodd"
    />
    <Svg.Path d="M18.998 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'AlphabetAPointThin';
