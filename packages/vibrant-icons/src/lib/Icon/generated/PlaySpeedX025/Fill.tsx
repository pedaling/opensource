import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Fill: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.G clipPath="url(#id-1a)" fill="#1A1A1A">
      <Svg.Path d="M13.75 5.75 15.9 3.6c.1-.1.1-.25.05-.35L14.5 1.8c-.1-.1-.25-.1-.35 0L12 4 9.85 1.85c-.1-.1-.25-.1-.35 0l-1.4 1.4c-.1.1-.1.25-.05.35l2.15 2.15L8.05 7.9c-.1.1-.1.25 0 .35l1.4 1.4c.1.1.25.1.35 0L12 7.5l2.15 2.15c.1.1.25.1.35 0l1.4-1.4c.1-.1.1-.25 0-.35l-2.15-2.15ZM.05 17.55c0-2.7 1.35-4.4 3.5-4.4s3.5 1.7 3.5 4.35c0 2.7-1.3 4.4-3.5 4.4s-3.5-1.7-3.5-4.35Zm4.65 0c0-1.6-.4-2.45-1.15-2.45-.75 0-1.15.85-1.15 2.45C2.35 19.1 2.75 20 3.5 20c.75 0 1.2-.9 1.2-2.45Zm12.95 1.7h1.8c.1 0 .15.05.2.15.15.35.55.65 1.05.65.65 0 1.1-.45 1.1-1.15 0-.65-.45-1.1-1.1-1.1-.25 0-.5.1-.7.2-.15.1-.25.2-.3.35-.05.05-.1.1-.15.1H17.8c-.05 0-.1-.05-.1-.1l.3-4.9c0-.05.05-.1.1-.1h5.3c.05 0 .1.05.1.1v1.65c0 .05-.05.1-.1.1h-3.6l-.1 1.9h.05c.3-.55.9-.95 1.75-.95 1.45 0 2.5 1.15 2.5 2.7 0 1.85-1.3 3.05-3.25 3.05-1.85 0-3-1.15-3.15-2.55-.05-.05 0-.1.05-.1Zm-7.25.9c0-.05 0-.1.05-.15l2.7-2.4c.95-.85 1.15-1.2 1.15-1.7s-.35-.9-.9-.9c-.6 0-.95.4-1 .95 0 .05-.05.1-.1.1h-1.9c-.05 0-.1-.05-.1-.1.05-1.65 1.3-2.75 3.1-2.75 1.9 0 3.1 1 3.1 2.55 0 1.15-.5 1.75-1.75 2.85l-1.4 1.25v.05h3.15c.05 0 .1.05.1.1v1.65c0 .05-.05.1-.1.1h-6c-.05 0-.1-.05-.1-.1v-1.5Zm-3.05.6c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1-.65 0-1.1-.45-1.1-1.1Z" />
    </Svg.G>
    <Svg.Defs>
      <Svg.ClipPath id="id-1a">
        <Svg.Path d="M0 0h24v24H0z" />
      </Svg.ClipPath>
    </Svg.Defs>
  </Svg>
);
