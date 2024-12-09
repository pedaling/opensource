import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'receipt-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M18 4.5v13l-1.95 1.4-1.95-1.4q-.15-.075-.3 0l-1.95 1.4-1.9-1.4q-.15-.075-.3 0L7.7 18.9 6 17.7V4.5zM20.2 2H3.75c-.15 0-.25.1-.25.25V21.5c0 .2.25.3.4.2l1.75-1.2 1.95 1.4q.15.075.3 0l1.95-1.4 1.95 1.4q.15.075.3 0l1.95-1.4L16 21.9q.15.075.3 0l1.95-1.4 2 1.25c.15.1.4 0 .4-.2V2.3c-.15-.15-.3-.3-.45-.3" />
    <Svg.Path d="M15.25 8.25h-6.5c-.15 0-.25-.1-.25-.25V7c0-.15.1-.25.25-.25h6.5c.15 0 .25.1.25.25v1c0 .15-.1.25-.25.25m0 3.5h-6.5c-.15 0-.25-.1-.25-.25v-1c0-.15.1-.25.25-.25h6.5c.15 0 .25.1.25.25v1c0 .15-.1.25-.25.25m0 3.5h-6.5c-.15 0-.25-.1-.25-.25v-1c0-.15.1-.25.25-.25h6.5c.15 0 .25.1.25.25v1c0 .15-.1.25-.25.25" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'ReceiptRegular';
