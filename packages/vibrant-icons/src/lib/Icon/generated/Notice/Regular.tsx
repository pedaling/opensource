import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'notice-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M4.9 23.1v-7.112l-3.922-.891-.078-.018V7.17l.078-.017L20.9 2.624V.9h2.2v20.45h-2.2v-1.725l-9.8-2.227V23.1zm4-2.2v-4.003l-1.8-.409V20.9zm12-3.531V4.879L3.1 8.927v4.397z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'NoticeRegular';
