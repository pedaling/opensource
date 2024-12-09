import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'paperplane-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="m9.756 11.497 2.982-1.657a.2.2 0 0 0 .078-.272l-.632-1.136a.2.2 0 0 0-.272-.078l-2.95 1.64L4.602 4.7h15.395l-8.373 13.956zm1.489 11.095a.2.2 0 0 1-.365-.052L8 11.5 1.27 3.327A.2.2 0 0 1 1.423 3h21.223a.2.2 0 0 1 .171.303z"
      clipRule="evenodd"
    />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'PaperPlaneThin';
