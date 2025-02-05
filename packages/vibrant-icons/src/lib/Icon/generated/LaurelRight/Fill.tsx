import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'laurelright-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M13.498 6.882c-.647 2.415-3.097 3.83-4.192 4.054-.837-.742-2.251-3.192-1.604-5.606.647-2.415 3.097-3.83 4.192-4.054.837.742 2.25 3.192 1.604 5.606m2.55 8.216c-2.35.855-4.913-.34-5.725-1.109.128-1.11 1.323-3.674 3.672-4.529s4.913.34 5.725 1.109c-.128 1.11-1.323 3.674-3.672 4.53M11.246 22c-2.5 0-4.5-2-5-3 .5-1 2.5-3 5-3s4.5 2 5 3c-.5 1-2.5 3-5 3" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'LaurelRightFill';
