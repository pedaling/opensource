import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'personslash-fill',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M6.96831 5.41266C7.3677 2.99433 9.46841 1.1499 11.9999 1.1499C14.8166 1.1499 17.0999 3.43325 17.0999 6.2499C17.0999 8.7814 15.2555 10.8821 12.8372 11.2815L22.6364 21.0807C22.7145 21.1589 22.7145 21.2855 22.6364 21.3636L21.3636 22.6364C21.2855 22.7145 21.1589 22.7145 21.0808 22.6364L1.3636 2.91922C1.2855 2.84112 1.2855 2.71449 1.3636 2.63638L2.63639 1.36359C2.7145 1.28548 2.84113 1.28548 2.91924 1.36359L6.96831 5.41266Z" />
    <Svg.Path d="M8.35139 12.907C5.04605 14.346 2.72941 17.6799 2.65192 21.5495C2.64971 21.66 2.73946 21.7499 2.84991 21.7499H17.1943L8.35139 12.907Z" />
  </Svg>
);

Fill.iconType = 'Fill';
