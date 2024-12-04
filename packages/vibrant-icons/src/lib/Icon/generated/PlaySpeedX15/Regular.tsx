import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'playspeedx15-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m12 7.3059-3.33556 3.3355-1.55599-1.556L10.444 5.7499l-3.33555-3.336L8.66395.858398 12 4.1939 15.336.858398 16.8915 2.4139l-3.3355 3.336 3.3355 3.3355-1.556 1.556L12 7.3059Zm-7.38354 7.867v1.8065l1.9765-1.325v6.0025h2.06049v-7.8505h-2.031l-2.00599 1.3665ZM16.916 16.4224c-.7445 0-1.378.29-1.723.7815l.1415-1.7825h3.667v-1.6145H13.69l-.3405 4.719h1.7925l.014-.027c.078-.151.2005-.2875.356-.396.217-.1585.4945-.2425.803-.2425.7135 0 1.212.472 1.212 1.1475v.0105c0 .6855-.4985 1.164-1.212 1.164-.587 0-1.066-.3325-1.1925-.8285l-.021-.074H13.222l.0085.1445c.0435.6645.361 1.265.8935 1.69.559.4465 1.3165.6825 2.191.6825 1.8965 0 3.1705-1.1315 3.1705-2.816v-.011c0-1.476-1.0805-2.5475-2.569-2.5475h-.0005Zm-5.6505 3.2225c-.5815 0-1.0545.473-1.0545 1.0545s.463 1.06 1.0545 1.06c.5915 0 1.06-.4655 1.06-1.06s-.4655-1.0545-1.06-1.0545Z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'PlaySpeedX15Regular';
