import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'flashauto-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M10.195 11.37h3.88l-3 4.85v-3.34a.25.25 0 0 0-.25-.25h-3.88l3-4.85v3.34a.25.25 0 0 0 .25.25m1.5-10.385a.24.24 0 0 0-.205.115L2.56 14.745a.25.25 0 0 0 .205.385H9.06v7.635a.25.25 0 0 0 .46.135l8.93-13.645a.25.25 0 0 0-.205-.385H11.95V1.235a.25.25 0 0 0-.255-.25M19.09 20.37h-.32l-.5.03-.425.035a.8.8 0 0 0-.5.22.63.63 0 0 0-.185.465.57.57 0 0 0 .09.325.6.6 0 0 0 .26.205q.181.066.375.065c.19.002.378-.04.55-.12a1 1 0 0 0 .4-.345.9.9 0 0 0 .155-.5v-2.185a.5.5 0 0 0-.095-.315.6.6 0 0 0-.265-.2 1 1 0 0 0-.39-.065 1.1 1.1 0 0 0-.42.07.7.7 0 0 0-.29.21.64.64 0 0 0-.14.34h-2.135a2.3 2.3 0 0 1 .395-1.12 2.4 2.4 0 0 1 1-.8 3.9 3.9 0 0 1 1.61-.3 4.2 4.2 0 0 1 1.59.28c.42.156.786.426 1.06.78.247.322.38.719.375 1.125v4.535H19.12v-.935h-.05a1.9 1.9 0 0 1-.47.59 2 2 0 0 1-.64.34 2.7 2.7 0 0 1-.81.11 2.8 2.8 0 0 1-1.13-.21 1.7 1.7 0 0 1-.76-.65 2 2 0 0 1-.27-1.08 1.8 1.8 0 0 1 .665-1.535 3.23 3.23 0 0 1 1.78-.57l.655-.035h.98z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'FlashAutoRegular';
