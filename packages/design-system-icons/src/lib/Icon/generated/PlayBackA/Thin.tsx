import type { FC } from 'react';
import { Svg } from '../../../Svg';
import type { IconProps } from '../../IconProp';

export const Thin: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="m5.1 5.1-.7-.7c-.1-.1-.25-.1-.35 0C2.15 6.4 1 9.05 1 12c0 2.95 1.15 5.6 3.05 7.6.1.1.25.1.35 0l.7-.7c.1-.1.1-.25 0-.35-1.6-1.7-2.6-4-2.6-6.55s1-4.85 2.6-6.55c.1-.1.1-.25 0-.35Zm14.5-.7-.7.7c-.1.1-.1.25 0 .35 1.6 1.7 2.6 4 2.6 6.55s-1 4.85-2.6 6.55c-.1.1-.1.25 0 .35l.7.7c.1.1.25.1.35 0 1.9-2 3.05-4.65 3.05-7.6 0-2.95-1.15-5.6-3.05-7.6-.1-.1-.25-.1-.35 0ZM7.5 12c0-1.15.45-2.2 1.15-3 .1-.1.1-.25 0-.35l-.7-.7c-.1-.1-.25-.1-.35 0C6.6 9 6 10.45 6 12c0 1.55.6 3 1.6 4.05.1.1.25.1.35 0l.7-.7c.1-.1.1-.25 0-.35-.7-.8-1.15-1.85-1.15-3Zm8.55-4.05-.7.7c-.1.1-.1.25 0 .35.7.8 1.15 1.85 1.15 3s-.45 2.2-1.15 3c-.1.1-.1.25 0 .35l.7.7c.1.1.25.1.35 0C17.4 15 18 13.55 18 12c0-1.55-.6-3-1.6-4.05-.05-.1-.25-.1-.35 0ZM12 13.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z" />
  </Svg>
);
