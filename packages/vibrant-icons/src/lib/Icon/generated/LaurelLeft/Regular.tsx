import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'laurelleft-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G clipRule="evenodd" fillRule="evenodd">
      <Svg.Path d="m14.0053 8.37883c-.5744-.21148-1.3161-1.048-1.575-2.01392-.2588-.96593-.0346-2.06126.357-2.53157.5743.21149 1.3161 1.048 1.5749 2.01393.2588.96592.0347 2.06126-.3569 2.53156zm.6851 2.55687c-1.5783-.0947-3.5449-1.63834-4.1919-4.05316-.64705-2.41481.2842-4.73489 1.6037-5.60608 1.5783.09473 3.5448 1.63836 4.1919 4.05317.647 2.41481-.2843 4.73487-1.6037 5.60607z" />
      <Svg.Path d="m11.1856 13.0839c-.5026.3492-1.61332.477-2.55302.135-.93969-.342-1.70837-1.1539-1.869-1.7445.50265-.3491 1.61335-.4769 2.55304-.1349.93968.342 1.70838 1.1539 1.86898 1.7444zm2.4875.9054c-.9829 1.2385-3.3753 1.964-5.72456 1.109-2.34923-.8551-3.71558-2.9487-3.6724-4.5292.98288-1.23855 3.37529-1.96405 5.72456-1.109 2.3492.8551 3.7156 2.9486 3.6724 4.5292z" />
      <Svg.Path d="m15.1029 19c-.3529.5-1.3529 1-2.3529 1s-2-.5-2.353-1c.353-.5 1.353-1 2.353-1s2 .5 2.3529 1zm2.6471 0c-.5 1.5-2.5 3-5 3s-4.50005-1.5-5.00005-3c.5-1.5 2.50005-3 5.00005-3s4.5 1.5 5 3z" />
    </Svg.G>
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'LaurelLeftRegular';
