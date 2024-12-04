import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chatbubble-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.1989 17.7564L21.1999 21.1999L17.7529 21.2009L17.7559 21.1979C16.0874 22.2444 14.1144 22.8499 11.9999 22.8499C6.0074 22.8499 1.1499 17.9924 1.1499 11.9999C1.1499 6.0074 6.0074 1.1499 11.9999 1.1499C17.9924 1.1499 22.8499 6.0074 22.8499 11.9999C22.8499 14.1159 22.2434 16.0899 21.1959 17.7589L21.1989 17.7564ZM19.4544 19.5004L19.4999 19.4549V17.2714L19.7779 16.8219C20.6754 15.3784 21.1504 13.7109 21.1504 11.9994C21.1504 6.9539 17.0459 2.8494 12.0004 2.8494C6.9549 2.8494 2.8499 6.9544 2.8499 11.9999C2.8499 17.0454 6.9544 21.1499 11.9999 21.1499C13.7104 21.1499 15.3769 20.6759 16.8199 19.7794L17.2679 19.5014H19.4539L19.4544 19.5004Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'ChatBubbleThin';
