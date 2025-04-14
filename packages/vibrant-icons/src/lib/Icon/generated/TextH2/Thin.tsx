import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'texth2-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.4296 17.1934C21.4277 16.5788 20.789 16.1091 20.1878 16.1188C19.8846 16.1139 19.5843 16.2366 19.3713 16.4524C19.117 16.7099 19.0024 17.1179 19.0526 17.4724H17.4538C17.4539 17.2279 17.5163 16.781 17.5914 16.581C17.7043 16.2805 17.8848 15.9651 18.1275 15.7256C18.356 15.5001 18.6285 15.2781 18.9298 15.1675C19.3415 15.0001 19.7938 14.95 20.2351 14.95C20.9643 14.95 21.6391 15.1003 22.1711 15.4955C22.7888 15.9542 23.0623 16.4546 23.0623 17.0706C23.0623 17.4597 22.9637 17.8685 22.8311 18.0928C22.487 18.6751 22.1114 19.1072 21.6633 19.5828C21.0672 20.2156 20.4167 20.8035 19.9197 21.2603H23.1762V22.55H17.613V21.501C17.613 21.501 18.7879 20.5345 19.5076 19.836C20.0184 19.3404 20.3022 19.0469 20.7153 18.6024C21.0333 18.264 21.4306 17.6699 21.4296 17.1934Z" />
    <Svg.Path d="M13.549 12.9249V21H15.4495V3H13.5495V11.0254H3.9V3H2V21H3.9V12.9249H13.549Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'TextH2Thin';
