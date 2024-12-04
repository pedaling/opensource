import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'school-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.25 9.15025V5.43515C5.25 5.25854 5.34316 5.09504 5.4951 5.005L11.745 1.3013C11.9022 1.20816 12.0976 1.20816 12.2548 1.3013L18.5049 5.005C18.6568 5.09504 18.75 5.25854 18.75 5.43515V9.15025H22.3499C22.626 9.15025 22.8499 9.3741 22.8499 9.65025V21.3502C22.8499 21.6264 22.626 21.8502 22.3499 21.8502H1.6499C1.37376 21.8502 1.1499 21.6264 1.1499 21.3502V9.65025C1.1499 9.3741 1.37376 9.15025 1.6499 9.15025H5.25ZM7.45 6.40381L11.9999 3.70752L16.55 6.40383V11.3502H20.6499V19.6502H3.3499V11.3502H7.45V6.40381Z"
    />
    <Svg.Path d="M12 11.7499C13.3117 11.7499 14.375 10.6865 14.375 9.37486C14.375 8.06318 13.3117 6.99986 12 6.99986C10.6883 6.99986 9.625 8.06318 9.625 9.37486C9.625 10.6865 10.6883 11.7499 12 11.7499Z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'SchoolRegular';
