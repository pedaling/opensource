import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'text-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M11.0494 4.8004H4.79941V6.4009C4.79941 6.51136 4.70987 6.6009 4.59941 6.6009H3.09941C2.98896 6.6009 2.89941 6.51136 2.89941 6.4009V3.0999C2.89941 2.98945 2.98896 2.8999 3.09941 2.8999H20.9036C20.764 2.8999 21.1036 2.98945 21.1036 3.0999V6.4009C21.1036 6.51136 21.014 6.6009 20.9036 6.6009H19.4036C19.2931 6.6009 19.2036 6.51136 19.2036 6.4009V4.8004H12.9536V19.1999H14.4036C14.514 19.1999 14.6036 19.2894 14.6036 19.3999V20.9004C14.6036 21.0109 14.514 21.1004 14.4036 21.1004H9.59942C9.48896 21.1004 9.39942 21.0109 9.39942 20.9004V19.3999C9.39942 19.2894 9.48896 19.1999 9.59942 19.1999H11.0494V4.8004Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'TextThin';
