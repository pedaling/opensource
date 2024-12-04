import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'playspeedx075-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m13.5561 5.7499 3.3355 3.3355-1.556 1.556-3.3355-3.3355-3.33549 3.3355-1.556-1.556 3.33549-3.3355-3.33549-3.336L8.66411.858398 12.0001 4.1939l3.336-3.335502L16.8916 2.4139l-3.3355 3.336Zm7.2465 10.6725c-.7445 0-1.3785.29-1.723.782l.1415-1.783h3.667v-1.6145h-5.312l-.34 4.719h1.792l.014-.027c.078-.151.201-.2875.356-.396.217-.159.4945-.243.803-.243.714 0 1.2125.472 1.2125 1.1475v.011c0 .685-.4985 1.1635-1.2125 1.1635-.5865 0-1.066-.3325-1.1925-.829l-.0215-.0735h-1.879l.0085.1445c.0435.6645.3605 1.265.8935 1.69.559.4465 1.3165.6825 2.191.6825 1.8965 0 3.1705-1.1315 3.1705-2.816v-.0105c0-1.4765-1.0805-2.5475-2.569-2.5475ZM7.45861 17.7239v.011c0 2.5055-1.291 4.062-3.3695 4.062S.714111 20.2404.714111 17.7349v-.011c0-2.5025 1.292999-4.0565 3.374499-4.0565s3.3695 1.5545 3.3695 4.0565h.0005Zm-2.0925 0c0-1.5575-.4535-2.415-1.2765-2.415s-1.282.88-1.282 2.415v.011c0 1.5385.4675 2.4205 1.282 2.4205s1.2765-.8595 1.2765-2.4205v-.011Zm5.00449-2.3025h3.811l-3.264 6.236h2.176l3.14-6.2685v-1.582h-5.863v1.6145Zm-1.65799 4.224c-.5815 0-1.0545.473-1.0545 1.0545s.463 1.06 1.0545 1.06c.5915 0 1.06-.4655 1.06-1.06s-.4655-1.0545-1.06-1.0545Z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'PlaySpeedX075Regular';
