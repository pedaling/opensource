import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'tv-regular',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M410 68H70c-23.16 0-42 18.84-42 42v220c0 23.16 18.84 42 42 42h67.5v40h204v-40H410c23.16 0 42-18.84 42-42V110c0-23.16-18.84-42-42-42Zm-2 260H72V112h336v216Z" />
  </Svg>
);

Regular.iconType = 'Regular';
