import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'laurelleft-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path d="m10.4986 6.88254c.647 2.41482 3.0965 3.82906 4.1919 4.05316.8365-.7418 2.2507-3.19126 1.6037-5.60607-.6471-2.41481-3.0966-3.82903-4.1919-4.05317-.8365.74178-2.25075 3.19127-1.6037 5.60608z" />
      <Svg.Path d="m7.94865 15.0983c2.34925.855 4.91265-.3403 5.72455-1.109-.1279-1.1107-1.3232-3.6741-3.6724-4.5292-2.34926-.85505-4.91269.3403-5.72455 1.109.12782 1.1107 1.32317 3.6741 3.6724 4.5292z" />
      <Svg.Path d="m12.7501 22c2.5 0 4.5-2 5-3-.5-1-2.5-3-5-3s-4.50004 2-5.00004 3c.5 1 2.50004 3 5.00004 3z" />
    </Svg.G>
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'LaurelLeftFill';
