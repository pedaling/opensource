import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'analysis-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.25 2.5H2.75c-.15 0-.25.1-.25.25v18.5c0 .15.1.25.25.25h18.5c.15 0 .25-.1.25-.25V2.75c0-.15-.1-.25-.25-.25M19 19h-2V8.25c0-.15-.1-.25-.25-.25h-1.5c-.15 0-.25.1-.25.25V19h-2v-6.75c0-.15-.1-.25-.25-.25h-1.5c-.15 0-.25.1-.25.25V19H9v-3.75c0-.15-.1-.25-.25-.25h-1.5c-.15 0-.25.1-.25.25V19H5V5h14z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'AnalysisRegular';
