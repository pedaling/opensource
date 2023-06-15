import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'monitor-regular',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M162.5 422v-44H198v-26H80c-23.16 0-42-18.84-42-42V100c0-23.16 18.84-42 42-42h320c23.16 0 42 18.84 42 42v210c0 23.16-18.84 42-42 42H282v26h34.5v44h-154ZM398 308V102H82v206h316Z" />
  </Svg>
);

Regular.iconType = 'Regular';
