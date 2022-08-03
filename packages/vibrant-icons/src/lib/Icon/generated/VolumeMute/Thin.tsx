import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.G clipPath="url(#id-5a)" fill="#1A1A1A">
      <Svg.Path d="M12.75 4.7v14.6l-3.9-2.85c-.15-.1-.4-.2-.6-.2h-5.5v-8.5h5.5c.2 0 .4-.05.6-.2l3.9-2.85Zm1.5-3.2c-.05 0-.1 0-.15.05L8.15 5.9c-.1.05-.2.1-.3.1h-6.6C1.1 6 1 6.1 1 6.25v11.5c0 .15.1.25.25.25h6.6c.1 0 .2.05.3.1l6 4.35c.05.05.1.05.15.05.15 0 .25-.1.25-.25V1.75c-.05-.15-.15-.25-.3-.25Zm9.7 7.7-.9-.9c-.1-.1-.25-.1-.35 0l-2.45 2.45L17.8 8.3c-.1-.1-.25-.1-.35 0l-.9.9c-.1.1-.1.25 0 .35L19 12l-2.45 2.45c-.1.1-.1.25 0 .35l.9.9c.1.1.25.1.35 0l2.45-2.45 2.45 2.45c.1.1.25.1.35 0l.9-.9c.1-.1.1-.25 0-.35L21.5 12l2.45-2.45c.05-.1.05-.25 0-.35Z" />
    </Svg.G>
    <Svg.Defs>
      <Svg.ClipPath id="id-5a">
        <Svg.Path d="M0 0h24v24H0z" />
      </Svg.ClipPath>
    </Svg.Defs>
  </Svg>
);
