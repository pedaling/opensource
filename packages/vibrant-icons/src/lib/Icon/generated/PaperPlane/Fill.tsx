import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'paperplane-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M7.293 10.641 1.269 3.327A.2.2 0 0 1 1.424 3h21.223a.2.2 0 0 1 .171.303L11.245 22.592a.2.2 0 0 1-.365-.052l-2.594-9.946 4.573-2.535a.2.2 0 0 0 .078-.272l-.874-1.573a.2.2 0 0 0-.272-.078z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'PaperPlaneFill';
