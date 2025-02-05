import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'laurelleft-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M14.005 8.379c-.574-.212-1.316-1.048-1.575-2.014s-.034-2.061.357-2.532c.575.212 1.316 1.048 1.575 2.014s.035 2.062-.357 2.532m.685 2.557c-1.578-.095-3.544-1.639-4.191-4.053-.648-2.415.284-4.735 1.603-5.607 1.578.095 3.545 1.639 4.192 4.054s-.284 4.734-1.604 5.606m-3.504 2.148c-.503.35-1.614.477-2.553.135-.94-.342-1.709-1.154-1.87-1.745.503-.349 1.614-.477 2.554-.135s1.708 1.154 1.869 1.745m2.487.905c-.983 1.239-3.375 1.964-5.724 1.11-2.35-.856-3.716-2.95-3.673-4.53.983-1.238 3.375-1.964 5.725-1.109s3.715 2.949 3.672 4.53zM15.103 19c-.353.5-1.353 1-2.353 1s-2-.5-2.353-1c.353-.5 1.353-1 2.353-1s2 .5 2.353 1m2.647 0c-.5 1.5-2.5 3-5 3s-4.5-1.5-5-3c.5-1.5 2.5-3 5-3s4.5 1.5 5 3"
      clipRule="evenodd"
    />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'LaurelLeftRegular';
