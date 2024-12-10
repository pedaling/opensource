import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'playspeedx2-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M10.798 5.75 7.462 2.414l1.203-1.202L12 4.548l3.335-3.336 1.203 1.203-3.337 3.336 3.337 3.335-1.203 1.203L12 6.953l-3.335 3.336-1.203-1.203zm1.215 14.046c-.507 0-.905.397-.905.904s.398.91.905.91.91-.4.91-.91-.4-.904-.91-.904m8.128-2.071v.01c0 1.192-.298 2.184-.863 2.87-.562.682-1.377 1.043-2.356 1.043-.98 0-1.795-.361-2.359-1.044-.566-.686-.866-1.678-.866-2.869v-.01c0-1.19.3-2.182.866-2.867.564-.68 1.38-1.04 2.359-1.04s1.794.36 2.356 1.04c.565.684.863 1.675.863 2.867m-1.792 0c0-1.654-.507-2.566-1.427-2.566s-1.432.935-1.432 2.566v.01c0 1.634.522 2.571 1.432 2.571s1.427-.937 1.427-2.57zm-12.08 2.258 1.548-1.319c1.275-1.104 1.727-1.666 1.727-2.62v-.012c0-1.325-1.142-2.215-2.843-2.215s-2.853.99-2.88 2.416h1.611c.052-.676.56-1.128 1.274-1.128.656 0 1.131.438 1.131 1.04v.011c0 .556-.268.954-1.194 1.772l-2.71 2.382v1.198H9.64v-1.315H6.268z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'PlaySpeedX2Thin';
