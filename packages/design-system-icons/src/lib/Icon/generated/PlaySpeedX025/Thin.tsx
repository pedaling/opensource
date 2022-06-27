import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="m15.65 2.95-.9-.9c-.05-.05-.25-.05-.3.05L12 4.5 9.55 2.05C9.5 2 9.3 2 9.2 2.1l-.9.9c-.1.1-.1.25 0 .35l2.45 2.45L8.3 8.25c-.1.1-.1.25 0 .35l.9.9c.1.1.25.1.35 0L12 7l2.45 2.45c.1.1.25.1.35 0l.9-.9c.1-.1.1-.25 0-.35l-2.45-2.45L15.7 3.3c.05-.05.05-.25-.05-.35ZM.45 17.55c0-2.7 1.25-4.4 3.35-4.4s3.35 1.7 3.35 4.35c0 2.7-1.25 4.4-3.35 4.4S.45 20.2.45 17.55Zm4.65 0c0-1.75-.45-2.7-1.35-2.7-.85 0-1.35.95-1.35 2.7 0 1.7.5 2.7 1.35 2.7.85-.05 1.35-1 1.35-2.7Zm5.35 2.8c0-.05 0-.1.05-.15l2.7-2.55c1-.95 1.15-1.3 1.15-1.85 0-.6-.45-1.05-1.05-1.05-.65 0-1.1.45-1.15 1.1 0 .05-.05.1-.1.1h-1.6c-.05 0-.1-.05-.1-.1.05-1.6 1.3-2.7 3-2.7 1.75 0 2.95 1.05 2.95 2.55 0 1.1-.5 1.75-1.75 2.95l-1.5 1.4v.05h3.3c.05 0 .1.05.1.1v1.45c0 .05-.05.1-.1.1h-5.8c-.05 0-.1-.05-.1-.1v-1.3Zm7.05-1.05h1.55c.1 0 .15.05.2.15.15.45.6.8 1.2.8.75 0 1.25-.55 1.25-1.3s-.55-1.3-1.25-1.3c-.35 0-.6.1-.85.3-.15.1-.25.2-.3.35-.05.05-.1.1-.15.1h-1.5c-.05 0-.1-.05-.1-.1l.3-4.85c0-.05.05-.1.1-.1H23c.05 0 .1.05.1.1v1.45c0 .05-.05.1-.1.1h-3.6l-.15 2.15h.05c.3-.55.95-.95 1.75-.95 1.45 0 2.55 1.15 2.55 2.7 0 1.8-1.25 3-3.15 3-1.75 0-2.9-1.1-3.05-2.5 0-.05.05-.1.1-.1ZM7.35 20.75c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1-.65 0-1.1-.45-1.1-1.1Z" />
  </Svg>
);
