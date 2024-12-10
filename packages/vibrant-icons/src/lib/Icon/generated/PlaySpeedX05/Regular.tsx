import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'playspeedx05-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M10.444 5.75 7.108 2.414 8.664.858 12 4.194 15.336.858l1.556 1.556-3.336 3.336 3.336 3.335-1.556 1.556L12 7.306 8.664 10.64 7.108 9.085zm1.598 13.895c-.582 0-1.055.473-1.055 1.055s.463 1.06 1.055 1.06 1.06-.466 1.06-1.06-.466-1.055-1.06-1.055m5.65-3.222c-.744 0-1.378.29-1.723.781l.142-1.782h3.666v-1.615h-5.311l-.34 4.72h1.792l.014-.028c.078-.15.201-.288.356-.396.217-.159.495-.243.803-.243.714 0 1.212.472 1.212 1.148v.01c0 .686-.498 1.164-1.212 1.164-.587 0-1.066-.332-1.192-.828l-.021-.074h-1.88l.009.144a2.34 2.34 0 0 0 .894 1.69c.559.447 1.316.683 2.19.683 1.897 0 3.171-1.132 3.171-2.816v-.01c0-1.477-1.08-2.548-2.569-2.548zm-7.124 1.301v.011c0 2.506-1.291 4.062-3.37 4.062s-3.375-1.556-3.375-4.062v-.01c0-2.503 1.293-4.057 3.375-4.057s3.37 1.554 3.37 4.056m-2.093 0c0-1.557-.453-2.415-1.276-2.415s-1.282.88-1.282 2.415v.011c0 1.539.467 2.42 1.282 2.42s1.276-.859 1.276-2.42z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'PlaySpeedX05Regular';
