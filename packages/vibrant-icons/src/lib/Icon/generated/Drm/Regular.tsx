import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'drm-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M58 422V58h364v364zm320-44V102H102v276zm-262-71.92V174.54h32.6c8.85 0 16.44 2.4 22.55 7.12 6.1 4.72 10.77 11.97 13.91 21.58 3.11 9.51 4.68 21.76 4.68 36.39v.18c0 14.58-1.58 26.9-4.68 36.62-3.13 9.81-7.81 17.28-13.9 22.2-6.12 4.94-13.71 7.45-22.57 7.45h-32.6Zm29.58-27.31c3.79 0 7.02-1.18 9.6-3.51 2.62-2.37 4.65-6.43 6.05-12.07 1.43-5.75 2.16-13.61 2.16-23.37v-.18c0-9.39-.73-16.98-2.16-22.55-1.4-5.46-3.45-9.42-6.08-11.76-2.65-2.33-5.77-3.47-9.57-3.47h-3.6v76.91zm92.16 27.31-12.78-47.13h-4.84v47.13H194.2V174.54h35.33c7.34 0 13.56 1.61 18.49 4.78 4.94 3.18 8.7 7.93 11.16 14.12 2.43 6.12 3.66 13.62 3.66 22.32v.18c0 8.58-1.22 16.08-3.62 22.31-2.32 6.01-5.59 10.65-9.72 13.81l15.62 54.02zm-11.66-70.67c3.49 0 5.99-1.33 7.66-4.05 1.74-2.85 2.62-7.4 2.62-13.53v-.18c0-6.07-.89-10.59-2.65-13.43-1.69-2.73-4.18-4.06-7.62-4.06h-5.96v35.25h5.96Zm138.02 70.67V174.54h-32.72l-14.56 81.88-14.5-81.88h-32.79v131.53h22.83v-79.31l14.4 79.31h20.2l14.25-79.02v79.02h22.9Z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'DrmRegular';
