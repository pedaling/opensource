import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'report-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12.9 1.25v2.5c0 .15-.1.25-.25.25H11.4c-.15 0-.25-.1-.25-.25v-2.5c0-.15.1-.25.25-.25h1.25c.1 0 .25.1.25.25m6.4 2.25-1.25 2.15c-.05.1-.2.15-.35.1l-1.1-.6c-.1-.1-.1-.25-.05-.35l1.25-2.15c.05-.15.2-.15.35-.1l1.1.6c.1.1.15.25.05.35M6.2 2.65 7.45 4.8c.05.1.05.25-.1.35l-1.1.6c-.1.05-.25.05-.35-.1L4.7 3.5c-.1-.1-.05-.25.1-.35l1.1-.6c.1-.05.25-.05.3.1m15.55 17.6H20.5V14c0-4.7-3.85-8.5-8.5-8.5S3.5 9.3 3.5 14v6.25H2.25c-.15 0-.25.1-.25.25v1.25c0 .15.1.25.25.25h19.5c.15 0 .25-.1.25-.25V20.5c0-.15-.1-.25-.25-.25m-3 0H12.9v-6c0-.15-.1-.25-.25-.25H11.4c-.15 0-.25.1-.25.25v6h-5.9V14c0-3.7 3.05-6.75 6.75-6.75s6.75 3.05 6.75 6.75z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'ReportThin';
