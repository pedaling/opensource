import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'playspeedx1-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M15.335 10.288 12 6.952l-3.336 3.336-1.203-1.203 3.337-3.335-3.336-3.336 1.202-1.202L12 4.548l3.336-3.336 1.202 1.203-3.336 3.336 3.336 3.335-1.203 1.203M4.46 15.252V16.7l1.81-1.213h.167v6.022h1.76v-7.551H6.363zm6.5 4.543c-.508 0-.905.397-.905.904s.397.91.904.91.91-.4.91-.91-.4-.904-.91-.904m8.595-2.07v.01c0 1.191-.298 2.183-.863 2.869-.562.682-1.377 1.043-2.356 1.043-.98 0-1.795-.36-2.359-1.043-.566-.687-.866-1.679-.866-2.87v-.01c0-1.19.3-2.181.866-2.866.564-.681 1.38-1.041 2.359-1.041s1.794.36 2.356 1.04c.565.685.863 1.676.863 2.867m-1.793 0c0-1.655-.506-2.566-1.426-2.566s-1.432.935-1.432 2.565v.01c0 1.634.522 2.572 1.432 2.572s1.426-.937 1.426-2.571z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'PlaySpeedX1Thin';
