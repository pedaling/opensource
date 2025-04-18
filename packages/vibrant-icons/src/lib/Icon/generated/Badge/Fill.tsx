import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'badge-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m22.5 10.05-.85-1.5c-.1-.2-.3-.7-.4-1l-.5-1.65v-.1c-.35-1.2-1.45-2.25-2.6-2.6h-.1l-1.7-.5h-.1c-.15-.05-.55-.2-.85-.35l-1.55-.85C13.3 1.15 12.65 1 12 1c-.7 0-1.3.15-1.85.45L8.6 2.3c-.2.1-.7.3-1 .4l-1.65.5h-.1c-1.2.35-2.25 1.45-2.6 2.6v.1l-.5 1.7v.1c-.05.15-.2.55-.35.85l-.85 1.55c-.6 1.1-.6 2.65 0 3.75l.85 1.55c.1.2.3.7.4 1l.5 1.65v.1c.35 1.2 1.45 2.25 2.6 2.6H6l1.7.5h.1c.15.05.55.2.85.35l1.55.85c.55.3 1.2.45 1.85.45.7 0 1.3-.15 1.85-.45l1.55-.85c.2-.1.7-.3 1-.4l1.65-.5h.1c1.2-.35 2.25-1.45 2.6-2.6l.5-1.75v-.2c.05-.15.2-.55.35-.85l.85-1.55c.65-1.05.65-2.55 0-3.7m-5.55.55-2.1 2.1c-.1.1-.15.3-.15.45l.55 3.2c0 .1-.05.15-.1.15h-.05L12.3 15q-.225-.15-.45 0l-2.8 1.5H9c-.05 0-.15-.05-.1-.15l.55-3.2c.05-.15-.05-.3-.15-.45l-2.1-2.1c-.15-.15-.05-.4.15-.4l2.9-.45c.15 0 .3-.15.4-.3l1.4-2.9c0-.05.05-.05.1-.05s.1 0 .1.05L13.5 9.5c.05.15.2.25.4.3l2.9.45c.2-.05.25.2.15.35" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'BadgeFill';
