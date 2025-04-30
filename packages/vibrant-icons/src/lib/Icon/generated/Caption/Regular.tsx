import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'caption-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M17.792 21.6v-6.166h-2.638V13.65h7.441v1.784h-2.637V21.6zm-9.517-.25a.25.25 0 0 1-.25-.25v-1.9a.25.25 0 0 1 .25-.25h1.4V5.05H4.55v1.551a.25.25 0 0 1-.25.25H2.4a.25.25 0 0 1-.25-.25v-3.7a.25.25 0 0 1 .25-.25h16.95a.25.25 0 0 1 .25.25v3.7a.25.25 0 0 1-.25.25h-1.9a.25.25 0 0 1-.25-.25v-1.55h-5.125V18.95h1.4a.25.25 0 0 1 .25.25v1.9a.25.25 0 0 1-.25.25z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'CaptionRegular';
