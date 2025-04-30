import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alphabeta-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M13.647 2.135a.2.2 0 0 0-.19-.135h-2.915a.2.2 0 0 0-.189.135L3.71 21.485a.2.2 0 0 0 .189.265H5.88a.2.2 0 0 0 .189-.134L8.007 16.1h7.986l1.938 5.516a.2.2 0 0 0 .189.134h1.982a.2.2 0 0 0 .19-.265zM15.22 13.9 12 4.736 8.78 13.9z"
      clipRule="evenodd"
    />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'AlphabetARegular';
