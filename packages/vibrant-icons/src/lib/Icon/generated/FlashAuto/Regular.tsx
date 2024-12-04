import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'flashauto-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M10.195 11.37h3.88l-3 4.85v-3.34a.25.25 0 0 0-.25-.25h-3.88l3-4.85v3.34a.25.25 0 0 0 .25.25Zm1.5-10.385a.24.24 0 0 0-.205.115L2.56 14.745a.25.25 0 0 0 .205.385H9.06v7.635a.25.25 0 0 0 .46.135l8.93-13.645a.25.25 0 0 0-.205-.385H11.95V1.235a.25.25 0 0 0-.255-.25ZM19.09 20.37h-.32l-.5.03-.425.035a.81.81 0 0 0-.5.22.628.628 0 0 0-.185.465.575.575 0 0 0 .09.325.59.59 0 0 0 .26.205c.12.044.247.066.375.065.19.002.378-.04.55-.12a1 1 0 0 0 .4-.345.89.89 0 0 0 .155-.5v-2.185a.5.5 0 0 0-.095-.315.606.606 0 0 0-.265-.2 1.031 1.031 0 0 0-.39-.065 1.09 1.09 0 0 0-.42.07.681.681 0 0 0-.29.21.635.635 0 0 0-.14.34h-2.135a2.29 2.29 0 0 1 .395-1.12 2.4 2.4 0 0 1 1-.8 3.905 3.905 0 0 1 1.61-.3 4.236 4.236 0 0 1 1.59.28c.42.156.786.426 1.06.78.247.322.38.719.375 1.125v4.535H19.12v-.935h-.05a1.87 1.87 0 0 1-.47.59 1.97 1.97 0 0 1-.64.34 2.714 2.714 0 0 1-.81.11 2.828 2.828 0 0 1-1.13-.21 1.72 1.72 0 0 1-.76-.65 2 2 0 0 1-.27-1.08 1.796 1.796 0 0 1 .665-1.535 3.23 3.23 0 0 1 1.78-.57l.655-.035h.98l.02 1.24Z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'FlashAutoRegular';
