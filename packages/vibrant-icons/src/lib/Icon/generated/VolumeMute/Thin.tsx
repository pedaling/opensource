import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'volumemute-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m1.2119 21.5859 3.4865-3.486H1.1499V5.89991h6.1445l7.0555-4.6225v7.1705l7.236-7.236 1.2025 1.2025L2.4139 22.7879l-1.2025-1.2025.0005.0005Zm1.638-5.186h3.548l.0435-.044 6.164-6.164.044-.0435V4.42341l-4.8475 3.1765h-4.952v8.79999Zm6.2945 2.912 1.228-1.228 2.2775 1.4925v-3.77l1.7-1.7v8.616l-5.2055-3.4105Zm9.784-.595c1.7565-1.8095 2.7215-4.189 2.7215-6.717 0-1.4735-.328-2.89249-.975-4.21849l1.2585-1.2585c.9275 1.6765 1.4165 3.56549 1.4165 5.47699 0 2.981-1.142 5.787-3.219 7.9195l-1.2025-1.2025Zm-2.829-2.829c1.001-1.0545 1.55-2.429 1.55-3.888 0-.3605-.036-.726-.1065-1.087l1.3785-1.37849c.2835.79599.4275 1.62399.4275 2.46599 0 1.9135-.7265 3.7145-2.048 5.09l-1.202-1.202.0005-.0005Z" />
  </Svg>
);

Thin.iconType = 'Thin';
