import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'searchtext-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M13.8 4.85a.2.2 0 0 0 .2-.2v-1.3a.2.2 0 0 0-.2-.2H2.2a.2.2 0 0 0-.2.2v1.3c0 .11.09.2.2.2z" />
    <Svg.Path
      fillRule="evenodd"
      d="M7.15 13.949a6.799 6.799 0 1 1 12.17 4.169l3.78 3.78-1.202 1.203-3.78-3.781A6.799 6.799 0 0 1 7.15 13.949m6.799-5.1a5.099 5.099 0 1 0 0 10.198 5.099 5.099 0 0 0 0-10.197"
      clipRule="evenodd"
    />
    <Svg.Path d="M7 9.15a.2.2 0 0 1-.2.2H2.2a.2.2 0 0 1-.2-.2v-1.3c0-.11.09-.2.2-.2h4.6c.11 0 .2.09.2.2zm-2.2 4.7a.2.2 0 0 0 .2-.2v-1.3a.2.2 0 0 0-.2-.2H2.2a.2.2 0 0 0-.2.2v1.3c0 .11.09.2.2.2z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'SearchTextThin';
