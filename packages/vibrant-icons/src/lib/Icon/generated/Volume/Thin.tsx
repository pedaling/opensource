import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'volume-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M7.2944 18.0998H1.1499V5.89984h6.1445l7.0555-4.6225V22.7223l-7.0555-4.6225Zm5.3555 1.4765V4.42334l-4.8475 3.1765H2.8499v8.79996h4.9525l4.8475 3.1765Zm6.2785-.8595c1.7565-1.8105 2.7215-4.1895 2.7215-6.717 0-2.52746-.965-4.90646-2.7215-6.71696l1.2025-1.2025c2.077 2.132 3.219 4.938 3.219 7.91946 0 2.9815-1.142 5.787-3.219 7.9195l-1.2025-1.2025Zm-2.829-2.829c1.001-1.0535 1.55-2.4285 1.55-3.888 0-1.4595-.5495-2.83446-1.55-3.88796l1.202-1.202c1.322 1.3755 2.048 3.17646 2.048 5.08996 0 1.9135-.7265 3.7145-2.048 5.09l-1.202-1.202Z" />
  </Svg>
);

Thin.iconType = 'Thin';
