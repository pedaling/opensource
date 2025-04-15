import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'caption-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M18.0424 21.3502V15.1842H15.4049V13.8997H22.3459V15.1842H19.7084V21.3502H18.0424ZM8.5249 21.1002C8.38683 21.1002 8.2749 20.9883 8.2749 20.8502V19.4497C8.2749 19.3116 8.38683 19.1997 8.5249 19.1997H9.9249V4.8507H4.2999V6.4012C4.2999 6.53927 4.18797 6.6512 4.0499 6.6512H2.6499C2.51183 6.6512 2.3999 6.53927 2.3999 6.4012V3.2002C2.3999 3.06212 2.51183 2.9502 2.6499 2.9502H19.0999C19.238 2.9502 19.3499 3.06212 19.3499 3.2002V6.4012C19.3499 6.53927 19.238 6.6512 19.0999 6.6512H17.6999C17.5618 6.6512 17.4499 6.53927 17.4499 6.4012V4.8507H11.8244V19.1997H13.2244C13.3625 19.1997 13.4744 19.3116 13.4744 19.4497V20.8502C13.4744 20.9883 13.3625 21.1002 13.2244 21.1002H8.5249Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'CaptionThin';
