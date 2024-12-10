import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'playspeedx075-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m13.556 5.75 3.336 3.335-1.556 1.556L12 7.306 8.665 10.64 7.109 9.085l3.335-3.335L7.11 2.414 8.664.858 12 4.194 15.336.858l1.556 1.556zm7.247 10.672c-.745 0-1.379.29-1.723.782l.141-1.783h3.667v-1.614h-5.312l-.34 4.719h1.792l.014-.027c.078-.151.201-.288.356-.396.217-.16.495-.243.803-.243.714 0 1.213.472 1.213 1.147v.011c0 .685-.499 1.164-1.213 1.164-.586 0-1.066-.333-1.192-.83l-.022-.073h-1.879l.009.145c.043.664.36 1.265.893 1.69.56.446 1.317.682 2.191.682 1.897 0 3.17-1.131 3.17-2.816v-.01c0-1.477-1.08-2.548-2.568-2.548M7.459 17.724v.01c0 2.506-1.291 4.063-3.37 4.063S.714 20.24.714 17.735v-.011c0-2.503 1.293-4.057 3.375-4.057s3.37 1.555 3.37 4.057m-2.093 0c0-1.558-.453-2.415-1.276-2.415s-1.282.88-1.282 2.415v.01c0 1.54.467 2.421 1.282 2.421s1.276-.86 1.276-2.42zm5.005-2.303h3.81l-3.263 6.236h2.176l3.14-6.268v-1.582H10.37zm-1.658 4.224c-.582 0-1.055.473-1.055 1.055s.463 1.06 1.055 1.06 1.06-.466 1.06-1.06-.466-1.055-1.06-1.055" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'PlaySpeedX075Regular';
