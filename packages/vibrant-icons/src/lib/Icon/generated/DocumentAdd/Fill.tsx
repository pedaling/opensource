import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'documentadd-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path
        fillRule="evenodd"
        d="M3.65 23.1a.25.25 0 0 1-.25-.25V1.15A.25.25 0 0 1 3.65.9h10.639l6.31 6.313V13H16.25v3.25h-3v6.85zM13.4 3.123V8.1h4.976z"
        clipRule="evenodd"
      />
      <Svg.Path d="M18.275 20.475V23.6h2.2v-3.125H23.6v-2.2h-3.125V15.15h-2.2v3.125H15.15v2.2z" />
    </Svg.G>
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'DocumentAddFill';
