import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'paperplane-fill',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M7.29263 10.641L1.26941 3.32714C1.16196 3.19667 1.25477 3 1.4238 3H22.6468C22.8022 3 22.8982 3.16959 22.8183 3.3029L11.2449 22.5919C11.1537 22.7438 10.9246 22.7109 10.8799 22.5395L8.2855 12.5944L12.8592 10.0588C12.9558 10.0052 12.9907 9.88335 12.937 9.78673L12.063 8.21358C12.0094 8.11696 11.8875 8.0822 11.7909 8.13598L7.29263 10.641Z" />
  </Svg>
);

Fill.iconType = 'Fill';
