import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alphabeta-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M13.422 2.384a.2.2 0 0 0-.189-.134h-2.466a.2.2 0 0 0-.189.134l-6.584 18.85a.2.2 0 0 0 .189.266H5.65a.2.2 0 0 0 .188-.133l1.957-5.517h8.408l1.957 5.517a.2.2 0 0 0 .188.133h1.468a.2.2 0 0 0 .19-.266zM15.6 14.15 12 4 8.4 14.15z"
      clipRule="evenodd"
    />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'AlphabetAThin';
