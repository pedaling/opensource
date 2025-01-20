import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'laurelright-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G clipRule="evenodd" fillRule="evenodd">
      <Svg.Path d="m9.98987 8.37874c.57433-.21148 1.31613-1.048 1.57493-2.01392.2588-.96593.0346-2.06127-.357-2.53157-.5743.21149-1.31606 1.048-1.57488 2.01393-.25882.96592-.03468 2.06126.35695 2.53156zm-.68512 2.55686c1.57825-.0947 3.54485-1.63833 4.19185-4.05315.6471-2.41481-.2842-4.73489-1.6037-5.60608-1.5783.09473-3.54479 1.63835-4.19183 4.05317-.64705 2.41481.2842 4.73486 1.60368 5.60606z" />
      <Svg.Path d="m12.8095 13.0838c.5026.3492 1.6133.477 2.553.135s1.7084-1.1539 1.869-1.7445c-.5026-.3491-1.6133-.4769-2.553-.1349s-1.7084 1.1539-1.869 1.7444zm-2.4874.9054c.9828 1.2385 3.3752 1.964 5.7245 1.109 2.3492-.8551 3.7156-2.9487 3.6724-4.5292-.9829-1.23854-3.3753-1.96404-5.7245-1.10899-2.3493.85509-3.7156 2.94859-3.6724 4.52919z" />
      <Svg.Path d="m8.89225 18.9999c.35291.5 1.35295 1 2.35295 1s2-.5 2.3529-1c-.3529-.5-1.3529-1-2.3529-1s-2.00004.5-2.35295 1zm-2.64709 0c.5 1.5 2.5 3 5.00004 3 2.5 0 4.5-1.5 5-3-.5-1.5-2.5-3-5-3-2.50004 0-4.50004 1.5-5.00004 3z" />
    </Svg.G>
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'LaurelRightRegular';
