import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'totebagplay-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M2.625 21.391a.5.5 0 0 0 .499.459h17.752a.5.5 0 0 0 .498-.459l1.197-14.55a.5.5 0 0 0-.499-.541H16.6V5.275A4.48 4.48 0 0 0 12.125.8h-.25A4.48 4.48 0 0 0 7.4 5.275V6.3H1.927a.5.5 0 0 0-.498.541zM14.4 5.275V6.3H9.6V5.275A2.277 2.277 0 0 1 11.875 3h.25A2.28 2.28 0 0 1 14.4 5.275M16 14.25l-6.5-3.5.2 7z"
      clipRule="evenodd"
    />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'ToteBagPlayFill';
