import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'crop-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.75 16.75H18.5v-11c0-.15-.1-.25-.25-.25h-11V2.25C7.25 2.1 7.15 2 7 2H5.75c-.15 0-.25.1-.25.25V5.5H2.25c-.15 0-.25.1-.25.25V7c0 .15.1.25.25.25H5.5v11c0 .15.1.25.25.25h11v3.25c0 .15.1.25.25.25h1.25c.15 0 .25-.1.25-.25V18.5h3.25c.15 0 .25-.1.25-.25V17c0-.15-.1-.25-.25-.25m-14.5 0v-9.5h9.5v9.5z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'CropThin';
