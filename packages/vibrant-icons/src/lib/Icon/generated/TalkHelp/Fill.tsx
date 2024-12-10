import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'talkhelp-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.35 17.85C22.4 16.15 23 14.15 23 12c0-6.1-4.9-11-11-11C5.5 1 .35 6.6 1.05 13.25c.55 5.05 4.65 9.15 9.7 9.7 2.6.3 5.05-.35 7.05-1.6.1-.05.2-.1.3-.05l3.1.25c.15 0 .25-.1.25-.25l-.25-3.15c.05-.15.05-.25.15-.3M12 18c-.85 0-1.5-.65-1.5-1.5S11.15 15 12 15s1.5.65 1.5 1.5S12.85 18 12 18m3.4-8.05q-.15.375-.45.75c-.2.2-.45.5-.8.8l-.3.25c-.3.25-.45.5-.6.75-.1.25-.15.5-.15.9 0 .05-.05.1-.1.1h-2c-.05 0-.1-.05-.1-.1 0-.6.05-1.15.2-1.6s.4-.85.75-1.1c.35-.3.65-.55.8-.8s.25-.5.25-.75c0-.35-.05-.6-.2-.75s-.35-.25-.65-.25c-.25 0-.45.1-.65.3-.15.2-.25.45-.25.8 0 .05-.05.1-.1.1H8.6c-.05 0-.1-.05-.1-.1.05-1.1.35-1.9 1-2.4.65-.55 1.5-.8 2.55-.8q1.65 0 2.55.75t.9 2.25c.1.3.05.65-.1.9" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'TalkHelpFill';
