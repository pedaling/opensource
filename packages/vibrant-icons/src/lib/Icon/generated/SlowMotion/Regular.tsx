import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'slowmotion-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M16.6852 11.9997L9.40021 16.6832V7.31672L16.6852 12.0002V11.9997ZM1.94971 10.9997H4.16271C4.33871 9.59772 4.88421 8.28072 5.75121 7.16472L4.18971 5.60322C2.95871 7.10372 2.15071 8.96372 1.94971 10.9997ZM5.60371 4.18922L7.16521 5.75072C8.28121 4.88372 9.59771 4.33822 11.0002 4.16222V1.94922C8.96421 2.15022 7.10421 2.95822 5.60371 4.18922ZM5.60371 19.8102C7.10421 21.0412 8.96421 21.8492 11.0002 22.0502V19.8372C9.59821 19.6612 8.28121 19.1157 7.16521 18.2487L5.60371 19.8102ZM13.0002 1.94922V4.16222C14.7317 4.37972 16.3327 5.15972 17.5862 6.41372C19.0787 7.90522 19.9002 9.88922 19.9002 11.9997C19.9002 14.1102 19.0787 16.0937 17.5862 17.5857C16.3327 18.8392 14.7317 19.6197 13.0002 19.8372V22.0502C18.1017 21.5467 22.1002 17.2312 22.1002 11.9997C22.1002 6.76822 18.1017 2.45272 13.0002 1.94922ZM4.18971 18.3962L5.75121 16.8347C4.88421 15.7187 4.33871 14.4022 4.16271 12.9997H1.94971C2.15071 15.0357 2.95871 16.8957 4.18971 18.3962Z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'SlowMotionRegular';
