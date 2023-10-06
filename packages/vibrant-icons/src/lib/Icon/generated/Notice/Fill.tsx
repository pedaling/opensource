import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'notice-fill',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M4.8999 23.0994v-7.111l-3.921998-.8915-.078-.0175V7.16941l.078-.0175L20.8999 2.62441V.899414h2.2V21.3494h-2.2v-1.725l-9.8-2.227v5.702h-6.2Z" />
  </Svg>
);

Fill.iconType = 'Fill';
