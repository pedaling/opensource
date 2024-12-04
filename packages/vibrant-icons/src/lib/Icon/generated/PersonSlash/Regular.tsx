import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'personslash-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.96831 5.41266C7.3677 2.99433 9.46841 1.1499 11.9999 1.1499C14.8166 1.1499 17.0999 3.43325 17.0999 6.2499C17.0999 8.7814 15.2555 10.8821 12.8372 11.2815L22.6364 21.0807C22.7145 21.1589 22.7145 21.2855 22.6364 21.3636L21.3636 22.6364C21.2855 22.7145 21.1589 22.7145 21.0808 22.6364L1.3636 2.91922C1.2855 2.84112 1.2855 2.71449 1.3636 2.63638L2.63639 1.36359C2.7145 1.28548 2.84113 1.28548 2.91924 1.36359L6.96831 5.41266ZM11.9999 3.3499C10.3983 3.3499 9.09991 4.64828 9.09991 6.2499C9.09991 7.85153 10.3983 9.1499 11.9999 9.1499C13.6015 9.1499 14.8999 7.85153 14.8999 6.2499C14.8999 4.64828 13.6015 3.3499 11.9999 3.3499Z"
    />
    <Svg.Path d="M8.35139 12.907C4.98913 14.3707 2.64991 17.7953 2.64991 21.7499H4.84991C4.84991 18.3339 7.07372 15.4933 10.0684 14.624L8.35139 12.907Z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'PersonSlashRegular';
