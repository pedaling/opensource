import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'bcircle-fill',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M13.18 10.33c0-.5-.375-.8-1-.8h-1v1.625h.945c.665-.01 1.055-.335 1.055-.825Zm-.905 2.28h-1.06v1.89h1.045c.745 0 1.18-.335 1.18-.945 0-.605-.44-.945-1.165-.945Z" />
    <Svg.Path d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22Zm3.925 12.74c0 1.455-1.15 2.42-2.93 2.42h-3.97a.25.25 0 0 1-.25-.25V8.1a.25.25 0 0 1 .25-.25h3.83c1.7 0 2.695.775 2.695 2.075a1.825 1.825 0 0 1-1.685 1.785v.045a2.04 2.04 0 0 1 2.06 1.965v.02Z" />
  </Svg>
);

Fill.iconType = 'Fill';
