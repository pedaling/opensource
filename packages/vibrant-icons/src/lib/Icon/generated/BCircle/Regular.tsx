import type { FC } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconProps } from '../../IconProp';

export const Regular: FC<IconProps> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Svg.Path d="M8.775 8.1a.25.25 0 0 1 .25-.25h3.83c1.7 0 2.695.775 2.695 2.075a1.825 1.825 0 0 1-1.685 1.785v.045a2.04 2.04 0 0 1 2.06 1.965c0 1.455-1.15 2.42-2.93 2.42h-3.97a.25.25 0 0 1-.25-.25V8.1Zm2.44 1.42v1.625h.945c.63 0 1-.325 1-.815 0-.5-.375-.8-1-.8l-.945-.01Zm0 3.09v1.89h1.045c.745 0 1.18-.335 1.18-.945 0-.585-.435-.925-1.165-.925l-1.06-.02Z" />
    <Svg.Path d="M12 3.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17ZM12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22Z" />
  </Svg>
);
