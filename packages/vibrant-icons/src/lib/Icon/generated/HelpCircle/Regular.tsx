import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'helpcircle-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 3.5c4.7 0 8.5 3.8 8.5 8.5s-3.8 8.5-8.5 8.5-8.5-3.8-8.5-8.5S7.3 3.5 12 3.5M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1" />
    <Svg.Path d="M12 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.9-6.2c.15-.45.4-.8.75-1.1s.65-.55.8-.8c.2-.25.25-.5.25-.75 0-.35-.05-.6-.2-.75s-.35-.25-.65-.25c-.25 0-.45.1-.65.3-.15.2-.25.45-.25.8 0 .05-.05.1-.1.1H8.6c-.05 0-.1-.05-.1-.1.05-1.1.35-1.9 1-2.4.65-.55 1.5-.8 2.55-.8q1.65 0 2.55.75t.9 2.25c0 .35-.05.7-.2.95q-.15.375-.45.75c-.2.2-.45.5-.8.8l-.3.25c-.3.25-.45.5-.6.75-.1.25-.15.5-.15.9 0 .05-.05.1-.1.1h-2c-.05 0-.1-.05-.1-.1.1-.7.2-1.2.3-1.65" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'HelpCircleRegular';
