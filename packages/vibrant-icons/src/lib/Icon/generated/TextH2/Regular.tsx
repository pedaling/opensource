import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'texth2-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M17.413 21.453v1.297h5.963v-1.6l-3.009.068s1.1-1.037 1.37-1.311c.218-.223.794-.876 1.053-1.233.295-.41.436-.995.436-1.565 0-.415-.122-.859-.316-1.18-.212-.35-.601-.68-1.05-.88q-.686-.297-1.625-.299c-.536 0-.999.077-1.374.23a2.45 2.45 0 0 0-1.443 1.423q-.163.435-.168.868h1.998c-.008-.25.09-.5.266-.678.175-.178.503-.274.768-.274s.456.055.596.16c.29.219.386.474.387.792.001.424-.297.888-.58 1.189-1.016 1.093-3.272 2.993-3.272 2.993M13.3 21v-7.825H4.15V21h-2.4V3h2.4v7.775h9.15V3h2.4v18z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'TextH2Regular';
