import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'volumemute-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m7.204 5.649-4.25-4.25a.25.25 0 0 0-.353 0L1.399 2.601a.25.25 0 0 0 0 .354L21.045 22.6a.25.25 0 0 0 .354 0l1.201-1.2a.25.25 0 0 0 0-.354l-3.501-3.5V1.497a.25.25 0 0 0-.379-.215L11.445 5.65zm6.478 14.646a.25.25 0 0 0 .156.055h1.474a.2.2 0 0 0 .14-.341L3.9 8.456v9.643c0 .138.112.25.25.25h7.1z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'VolumeMuteFill';
