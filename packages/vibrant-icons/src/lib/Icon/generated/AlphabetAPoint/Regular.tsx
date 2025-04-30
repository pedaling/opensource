import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alphabetapoint-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M10.545 2a.2.2 0 0 0-.19.135l-6.644 19.35a.2.2 0 0 0 .19.265h1.981a.2.2 0 0 0 .189-.134L8.009 16.1h6.676a5.2 5.2 0 0 1 3.025-2.138L13.649 2.135a.2.2 0 0 0-.19-.135zm4.677 11.9-3.22-9.164-3.22 9.164z"
      clipRule="evenodd"
    />
    <Svg.Path d="M19.002 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'AlphabetAPointRegular';
