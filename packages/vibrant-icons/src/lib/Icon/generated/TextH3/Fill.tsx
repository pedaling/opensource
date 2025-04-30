import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'texth3-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M13.3 21v-7.825H4.15V21h-2.4V3h2.4v7.775h9.15V3h2.4v18zm3.8-.444c.119 1.479 1.397 2.434 3.257 2.434 2 0 3.29-.964 3.29-2.457v-.011c0-.945-.6-1.61-1.625-1.83.813-.29 1.32-.952 1.32-1.763v-.011c0-1.31-1.249-2.157-3-2.157-1.753 0-2.954.934-3.06 2.38l-.013.183h1.986l.014-.138c.05-.468.465-.76 1.072-.76s.969.284.969.76v.011c0 .498-.429.808-1.12.808h-.932v1.537h.943c1.082 0 1.243.543 1.243.867v.01c0 .498-.456.82-1.092.82s-1.106-.286-1.17-.714l-.025-.14h-2.072z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'TextH3Fill';
