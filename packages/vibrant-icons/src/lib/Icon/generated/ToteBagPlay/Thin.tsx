import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'totebagplay-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path d="m15.5 14-5.7-3 .2 6z" />
      <Svg.Path
        fillRule="evenodd"
        d="M22.268 6.65H16.35V5.265a4.23 4.23 0 0 0-4.225-4.115h-.25A4.23 4.23 0 0 0 7.65 5.375V6.65H1.733a.5.5 0 0 0-.497.556l1.595 14.2a.5.5 0 0 0 .496.444h17.346a.5.5 0 0 0 .497-.444l1.595-14.2a.5.5 0 0 0-.497-.556m-1.342 1.7L19.6 20.15H4.4L3.074 8.35zM9.35 5.375a2.6 2.6 0 0 1 .036-.425 2.53 2.53 0 0 1 2.49-2.1h.25a2.53 2.53 0 0 1 2.524 2.525V6.65h-5.3z"
        clipRule="evenodd"
      />
    </Svg.G>
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'ToteBagPlayThin';
