import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'replay-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 23.1a11.14 11.14 0 0 1-9.619-5.557l-.05-.087 1.906-1.1.05.087A8.94 8.94 0 0 0 12 20.9c4.907 0 8.9-3.993 8.9-8.9 0-4.908-3.993-8.9-8.9-8.9a8.86 8.86 0 0 0-6.094 2.413l1.565 1.096a.1.1 0 0 1-.023.176l-4.896 1.76a.1.1 0 0 1-.133-.093L2.4 3.25a.1.1 0 0 1 .157-.082L4.075 4.23A11.16 11.16 0 0 1 12 .9C18.12.9 23.1 5.88 23.1 12S18.12 23.1 12 23.1M9.4 8a.1.1 0 0 1 .152-.085l6.5 4a.1.1 0 0 1 0 .17l-6.5 4A.1.1 0 0 1 9.4 16z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'ReplayFill';
