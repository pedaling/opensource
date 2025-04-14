import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'clearstyle-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.10198 2.8999L2.60101 1.39893L1.39893 2.60101L21.3989 22.601L22.601 21.3989L12.9536 11.7515V4.8004H19.2036V6.4009C19.2036 6.51136 19.2931 6.6009 19.4036 6.6009H20.9036C21.014 6.6009 21.1036 6.51136 21.1036 6.4009V3.0999C21.1036 3.03915 21.0009 2.98473 20.9316 2.94805C20.875 2.91803 20.8408 2.8999 20.9036 2.8999H4.10198ZM6.00248 4.8004L11.0494 9.8473V4.8004H6.00248Z"
    />
    <Svg.Path d="M11.0494 19.1999V14.6519L12.9536 16.5561V19.1999H14.4036C14.514 19.1999 14.6036 19.2894 14.6036 19.3999V20.9004C14.6036 21.0109 14.514 21.1004 14.4036 21.1004H9.59941C9.48896 21.1004 9.39942 21.0109 9.39942 20.9004V19.3999C9.39942 19.2894 9.48896 19.1999 9.59941 19.1999H11.0494Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'ClearStyleThin';
