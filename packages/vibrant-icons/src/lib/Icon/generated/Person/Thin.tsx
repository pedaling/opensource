import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'person-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M12 14.1c-4.063 0-7.4 3.4-7.4 7.65H2.9c0-5.14 4.05-9.35 9.1-9.35s9.1 4.21 9.1 9.35h-1.7c0-4.25-3.337-7.65-7.4-7.65M12 2.85a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8m-5.1 3.4a5.1 5.1 0 1 1 10.2 0 5.1 5.1 0 0 1-10.2 0"
      clipRule="evenodd"
    />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'PersonThin';
