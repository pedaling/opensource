import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'receipt-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M15.25 8.25h-6.5c-.15 0-.25-.1-.25-.25V7c0-.15.1-.25.25-.25h6.5c.15 0 .25.1.25.25v1c0 .15-.1.25-.25.25m0 3.5h-6.5c-.15 0-.25-.1-.25-.25v-1c0-.15.1-.25.25-.25h6.5c.15 0 .25.1.25.25v1c0 .15-.1.25-.25.25m0 3.5h-6.5c-.15 0-.25-.1-.25-.25v-1c0-.15.1-.25.25-.25h6.5c.15 0 .25.1.25.25v1c0 .15-.1.25-.25.25" />
    <Svg.Path d="M18.75 3.75v14.3l-2.7 1.8-2.1-1.5-2.1 1.5-2.1-1.5-2.1 1.5-2.45-1.8V3.75zM20.2 2H3.75c-.15 0-.25.1-.25.25V21.5c0 .15.1.25.25.25.05 0 .1 0 .15-.05l1.75-1.2 1.95 1.4c.05.05.1.05.15.05s.1 0 .15-.05l1.95-1.4 1.95 1.4c.05.05.1.05.15.05s.1 0 .15-.05l1.95-1.4L16 21.9c.05.05.1.05.15.05s.1 0 .15-.05l1.95-1.4 2 1.25c.05.05.1.05.15.05.15 0 .25-.1.25-.25V2.3c-.15-.15-.3-.3-.45-.3" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'ReceiptThin';
