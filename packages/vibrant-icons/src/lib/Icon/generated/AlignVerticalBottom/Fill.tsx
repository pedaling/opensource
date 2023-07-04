import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'alignverticalbottom-fill',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M14.2504 18.5999c-.6065 0-1.1-.4935-1.1-1.1v-8.5c0-.6065.4935-1.1 1.1-1.1h4c.6065 0 1.1.4935 1.1 1.1v8.5c0 .6065-.4935 1.1-1.1 1.1h-4ZM5.75039 18.5999c-.6065 0-1.1-.4935-1.1-1.1v-14c0-.6065.4935-1.1 1.1-1.1h4c.60651 0 1.10001.4935 1.10001 1.1v14c0 .6065-.4935 1.1-1.10001 1.1h-4ZM23.1004 20.3999H.900391v1.7H23.1004v-1.7Z" />
  </Svg>
);

Fill.iconType = 'Fill';
