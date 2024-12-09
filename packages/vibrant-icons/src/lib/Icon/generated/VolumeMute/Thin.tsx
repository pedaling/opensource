import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'volumemute-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M7.101 5.899 2.778 1.576a.25.25 0 0 0-.354 0l-.848.848a.25.25 0 0 0 0 .354l19.646 19.646a.25.25 0 0 0 .354 0l.848-.848a.25.25 0 0 0 0-.354l-3.574-3.574V1.89a.25.25 0 0 0-.387-.21L11.997 5.9zm1.7 1.7 8.349 8.349V4.568L12.503 7.6z"
      clipRule="evenodd"
    />
    <Svg.Path d="M16.129 19.754a.2.2 0 0 1-.137.346h-1.406a.25.25 0 0 1-.154-.053l-2.48-1.948H4.4a.25.25 0 0 1-.25-.25V7.752l1.7 1.7V16.4h6.699z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'VolumeMuteThin';
