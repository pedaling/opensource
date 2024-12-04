import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'playspeedx15-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m8.6646 10.2884-1.203-1.20299 3.3365-3.3355-3.336-3.3355 1.2025-1.2025 3.336 3.3365 3.3355-3.336 1.2025 1.2025-3.3365 3.336 3.3365 3.3355-1.203 1.20299-3.3355-3.33649-3.3355 3.33649v-.001Zm-3.898 4.964v1.4465l1.8085-1.212h.168v6.021h1.761v-7.5505H6.6686l-1.902 1.295Zm12.1495 1.3205c-.741 0-1.3615.303-1.6595.81l-.029.049h-.203l.1715-2.1605h3.6555v-1.3145h-5.0225l-.3185 4.419h1.5415c.0895-.151.217-.287.3705-.3945.2425-.1775.551-.2715.8915-.2715.802 0 1.362.5335 1.362 1.298v.011c0 .7735-.56 1.314-1.362 1.314-.6425 0-1.1715-.362-1.3275-.9025h-1.6065c.0955 1.3265 1.2725 2.217 2.934 2.217 1.8065 0 3.0205-1.0715 3.0205-2.6665v-.0105c0-1.389-1.017-2.3975-2.419-2.3975h.0005Zm-5.6505 3.2225c-.507 0-.9045.397-.9045.904s.3975.91.9045.91c.507 0 .9095-.3995.9095-.91s-.3995-.904-.9095-.904Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'PlaySpeedX15Thin';
