import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'playspeedx1-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m12 7.3059-3.33545 3.3355-1.556-1.556L10.444 5.7499l-3.33545-3.336L8.66405.858398 12 4.1939 15.336.858398 16.8915 2.4139l-3.3355 3.336 3.3355 3.3355-1.556 1.556L12 7.3059Zm7.7055 10.418v.011c0 2.5055-1.291 4.062-3.3695 4.062s-3.375-1.5565-3.375-4.062v-.011c0-2.5025 1.293-4.0565 3.375-4.0565s3.3695 1.5545 3.3695 4.0565Zm-2.0925 0c0-1.5575-.4535-2.415-1.2765-2.415s-1.282.88-1.282 2.415v.011c0 1.5385.4675 2.4205 1.282 2.4205s1.2765-.8595 1.2765-2.4205v-.011Zm-13.30245-2.551v1.8065l1.9765-1.325v6.0025h2.0605v-7.8505h-2.031l-2.006 1.3665Zm6.64895 4.472c-.5815 0-1.05445.473-1.05445 1.0545s.46295 1.06 1.05445 1.06c.5915 0 1.06-.4655 1.06-1.06s-.4655-1.0545-1.06-1.0545Z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'PlaySpeedX1Fill';
