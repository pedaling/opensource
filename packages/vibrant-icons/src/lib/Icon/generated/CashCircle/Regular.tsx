import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'cashcircle-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 23.1a11.03 11.03 0 0 1-7.85-3.252A11.03 11.03 0 0 1 .9 12c0-2.965 1.154-5.752 3.25-7.85A11.03 11.03 0 0 1 12 .9c2.965 0 5.752 1.154 7.848 3.25A11.03 11.03 0 0 1 23.1 12c0 2.965-1.155 5.752-3.252 7.848A11.03 11.03 0 0 1 12 23.1m0-20c-4.908 0-8.9 3.992-8.9 8.9 0 4.907 3.992 8.9 8.9 8.9 4.907 0 8.9-3.993 8.9-8.9 0-4.908-3.993-8.9-8.9-8.9m.127 13.722c-1.384 0-2.536-.444-3.332-1.284-.8-.846-1.224-2.078-1.224-3.564v-.006c0-1.483.425-2.713 1.23-3.558.796-.836 1.946-1.277 3.326-1.277 1.186 0 2.223.363 2.999 1.05a3.68 3.68 0 0 1 1.233 2.632v.168h-2.428l-.024-.182c-.148-.962-.813-1.538-1.78-1.538-.596 0-1.094.243-1.44.702-.354.473-.542 1.164-.542 1.997v.006c0 1.68.762 2.725 1.989 2.725.966 0 1.634-.586 1.786-1.566l.028-.155h2.433l-.016.18a3.66 3.66 0 0 1-1.241 2.624c-.768.675-1.832 1.046-2.997 1.046" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'CashCircleRegular';
