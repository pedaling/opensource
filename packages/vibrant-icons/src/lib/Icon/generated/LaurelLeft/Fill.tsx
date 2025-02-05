import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'laurelleft-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M10.499 6.883c.647 2.414 3.096 3.829 4.191 4.053.837-.742 2.251-3.192 1.604-5.606-.647-2.415-3.096-3.83-4.192-4.054-.836.742-2.25 3.192-1.603 5.607m-2.55 8.215c2.349.855 4.912-.34 5.724-1.109-.128-1.11-1.323-3.674-3.672-4.529s-4.913.34-5.725 1.11c.128 1.11 1.323 3.673 3.673 4.528M12.75 22c2.5 0 4.5-2 5-3-.5-1-2.5-3-5-3s-4.5 2-5 3c.5 1 2.5 3 5 3" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'LaurelLeftFill';
