import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'hot-regular',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 23c4.95 0 9-4.1 9-9.15 0-4-2.7-6.5-5.3-9.15-1.15-1.2-2.35-2.4-3.5-3.55-.05-.1-.1-.15-.2-.15s-.15.05-.2.1c-1.15 1.2-2.35 2.4-3.5 3.55C5.7 7.3 3 9.85 3 13.85 3 18.9 7.05 23 12 23Zm0-18.55c1.4 1.45 2.8 2.9 4.25 4.3 1.4 1.4 2.25 3.1 2.25 5.1 0 3.65-2.9 6.65-6.5 6.65s-6.5-3-6.5-6.65c0-2 .9-3.7 2.25-5.1C9.2 7.3 10.6 5.9 12 4.45Z" />
    <Svg.Path d="M12.4 18.95c1.15-.2 2.05-1.25 2.1-2.45 0-1.1-.75-1.8-1.45-2.55-.2-.2-.65-.6-.85-.85-.1-.1-.25-.1-.35 0-.25.2-.65.6-.85.85-.7.7-1.45 1.4-1.45 2.5-.1 1.55 1.25 2.75 2.85 2.5Z" />
  </Svg>
);

Regular.iconType = 'Regular';
