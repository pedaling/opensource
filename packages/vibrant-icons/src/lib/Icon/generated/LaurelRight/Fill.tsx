import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'laurelright-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path d="m13.4976 6.88245c-.647 2.41482-3.0965 3.82905-4.19186 4.05315-.83651-.7418-2.25073-3.19125-1.60368-5.60606.64705-2.41482 3.09654-3.82903 4.19184-4.05317.8366.74178 2.2508 3.19127 1.6037 5.60608z" />
      <Svg.Path d="m16.0476 15.0982c-2.3493.855-4.9127-.3403-5.7246-1.109.1279-1.1107 1.3232-3.6741 3.6724-4.52919 2.3493-.85505 4.9127.3403 5.7246 1.10899-.1279 1.1107-1.3232 3.6741-3.6724 4.5292z" />
      <Svg.Path d="m11.2462 21.9999c-2.50004 0-4.50004-2-5.00004-3 .5-1 2.5-3 5.00004-3 2.5 0 4.5 2 5 3-.5 1-2.5 3-5 3z" />
    </Svg.G>
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'LaurelRightFill';
