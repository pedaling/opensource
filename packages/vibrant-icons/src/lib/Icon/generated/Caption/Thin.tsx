import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'caption-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M18.042 21.35v-6.166h-2.637V13.9h6.94v1.284h-2.637v6.166zm-9.517-.25a.25.25 0 0 1-.25-.25v-1.4a.25.25 0 0 1 .25-.25h1.4V4.85H4.3v1.551a.25.25 0 0 1-.25.25h-1.4a.25.25 0 0 1-.25-.25v-3.2a.25.25 0 0 1 .25-.25H19.1a.25.25 0 0 1 .25.25v3.2a.25.25 0 0 1-.25.25h-1.4a.25.25 0 0 1-.25-.25v-1.55h-5.626V19.2h1.4a.25.25 0 0 1 .25.25v1.4a.25.25 0 0 1-.25.25z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'CaptionThin';
