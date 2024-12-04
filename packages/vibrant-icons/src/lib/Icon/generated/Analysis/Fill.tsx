import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'analysis-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.25 2.5H2.75c-.15 0-.25.1-.25.25v18.5c0 .15.1.25.25.25h18.5c.15 0 .25-.1.25-.25V2.75c0-.15-.1-.25-.25-.25ZM8.75 19h-1.5c-.15 0-.25-.1-.25-.25v-3.5c0-.15.1-.25.25-.25h1.5c.15 0 .25.1.25.25v3.5c0 .15-.1.25-.25.25Zm4 0h-1.5c-.15 0-.25-.1-.25-.25v-6.5c0-.15.1-.25.25-.25h1.5c.15 0 .25.1.25.25v6.5c0 .15-.1.25-.25.25Zm4 0h-1.5c-.15 0-.25-.1-.25-.25V8.25c0-.15.1-.25.25-.25h1.5c.15 0 .25.1.25.25v10.5c0 .15-.1.25-.25.25Z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'AnalysisFill';
