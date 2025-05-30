import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'bold-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M5.5 3h6.445c1.826 0 3.367.428 4.477 1.23 1.13.816 1.778 2.002 1.778 3.37 0 1.754-1.487 3.4-2.85 3.948 1.15.112 2.592.868 3.151 1.709.428.643.646 1.407.697 2.271.116 1.956-.64 3.358-1.853 4.233-1.162.84-2.267 1.239-3.995 1.239H5.5zm5.55 8c1.821 0 3.121-.368 4.028-.945.856-.545 1.344-1.296 1.344-2.455 0-.782-.44-1.53-1.161-2.05-.742-.536-1.736-.85-3.315-.85H7.2V11zM7.2 12.7h3.85c2.342 0 3.742.182 4.721.757.932.546 1.416 1.217 1.416 2.139 0 1.434-.49 2.137-1.066 2.653-.71.635-1.961 1.051-2.957 1.051H7.2z"
      clipRule="evenodd"
    />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'BoldThin';
