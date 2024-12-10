import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'clearstyle-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M22.646 21.727a.2.2 0 0 0 0-.282l-9.697-9.697V5.55h5.5v1.6c0 .111.09.2.2.2h1.5a.2.2 0 0 0 .2-.2v-3.3a.2.2 0 0 0-.2-.2H4.851L2.555 1.353a.2.2 0 0 0-.283 0l-.92.92a.2.2 0 0 0 0 .283l20.092 20.09a.2.2 0 0 0 .283 0zM11.049 9.848 6.752 5.551h4.297zM14.4 20.35a.2.2 0 0 0 .2-.2v-1.5a.2.2 0 0 0-.2-.2h-1.45V17.4l-1.9-1.9v2.95H9.6a.2.2 0 0 0-.2.2v1.5c0 .11.09.2.2.2z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'ClearStyleThin';
