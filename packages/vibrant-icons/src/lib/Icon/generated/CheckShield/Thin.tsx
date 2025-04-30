import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'checkshield-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12.003 21.828c-.556-.313-4.13-2.349-5.903-3.94-1.876-1.682-1.95-3.87-1.95-3.89V5.103l7.853-2.943 7.847 2.944V14c0 .022-.027 2.206-1.95 3.887-1.885 1.65-5.352 3.632-5.898 3.94m-.054-17.832-6.1 2.286v7.677c.013.156.154 1.558 1.387 2.665 1.266 1.135 3.7 2.614 4.687 3.197l.077.044.076-.045c1.194-.707 3.394-2.064 4.706-3.213 1.258-1.1 1.36-2.472 1.368-2.624v-7.7l-6.095-2.287-.053-.02zm-4.554 7.407L8.597 10.2l2.493 2.493.106.106.106-.106 4.137-4.137 1.167 1.167-5.445 5.445z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'CheckShieldThin';
