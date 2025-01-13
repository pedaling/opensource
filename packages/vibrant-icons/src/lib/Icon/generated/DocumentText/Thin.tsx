import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'documenttext-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path d="m8.6499 15.1504v1.7h6.7v-1.7z" />
      <Svg.Path d="m8.6499 11.1504v1.7h6.7v-1.7z" />
      <Svg.Path
        clipRule="evenodd"
        d="m3.8999 22.8504c-.13807 0-.25-.1119-.25-.25v-21.20001c0-.13807.11193-.25.25-.25h10.286l6.164 6.166v15.28401c0 .1381-.1119.25-.25.25zm9.581-20.00001h-8.131v18.30001h13.3v-13.13001l-.17-.17h-4.83v-4.831z"
        fillRule="evenodd"
      />
    </Svg.G>
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'DocumentTextThin';
