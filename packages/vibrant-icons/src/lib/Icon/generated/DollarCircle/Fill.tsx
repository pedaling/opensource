import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'dollarcircle-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M19.848 4.15C17.752 2.055 14.965.9 12 .9S6.248 2.054 4.15 4.15C2.055 6.249.9 9.036.9 12s1.154 5.752 3.25 7.848S9.036 23.1 12 23.1s5.752-1.155 7.848-3.252S23.1 14.965 23.1 12s-1.155-5.752-3.252-7.85m-3.512 9.755c0 .89-.307 1.666-.888 2.242-.562.556-1.381.928-2.375 1.079v1.758h-2.145v-1.752c-1.977-.283-3.163-1.398-3.26-3.07l-.007-.125-.006-.116h2.59l.03.167c.113.588.82.985 1.756.985s1.537-.373 1.537-.951v-.008c0-.428-.245-.707-1.538-.96l-1.032-.195c-2.055-.38-3.141-1.42-3.141-3.006v-.007c0-1.655 1.174-2.878 3.071-3.212v-1.72h2.145v1.717c1.858.303 2.967 1.405 3.048 3.035l.012.262h-2.596l-.017-.176c-.068-.592-.672-.976-1.538-.976s-1.363.351-1.363.895v.007c0 .54.587.761 1.467.926l1.034.195c2.225.429 3.217 1.354 3.217 2.999v.007" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'DollarCircleFill';
