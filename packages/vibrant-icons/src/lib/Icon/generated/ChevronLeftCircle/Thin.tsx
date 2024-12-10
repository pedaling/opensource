import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chevronleftcircle-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M13.689 6.35a.2.2 0 0 0-.283.001L7.9 11.859a.2.2 0 0 0 0 .283l5.506 5.508a.2.2 0 0 0 .283 0l.92-.92a.2.2 0 0 0 0-.283L10.163 12l4.446-4.447a.2.2 0 0 0 0-.282z" />
    <Svg.Path
      fillRule="evenodd"
      d="M1.15 12c0 5.992 4.858 10.85 10.85 10.85 5.993 0 10.85-4.858 10.85-10.85 0-5.993-4.857-10.85-10.85-10.85S1.15 6.007 1.15 12m20 0c0 5.045-4.104 9.15-9.15 9.15-5.045 0-9.15-4.105-9.15-9.15 0-5.046 4.105-9.15 9.15-9.15 5.046 0 9.15 4.104 9.15 9.15"
      clipRule="evenodd"
    />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'ChevronLeftCircleThin';
