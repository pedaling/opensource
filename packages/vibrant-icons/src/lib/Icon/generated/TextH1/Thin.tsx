import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'texth1-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M14.5 2.5h-1.25c-.15 0-.25.1-.25.25v8.4H3.5v-8.4c0-.15-.1-.25-.25-.25H2c-.15 0-.25.1-.25.25v18.5c0 .15.1.25.25.25h1.25c.15 0 .25-.1.25-.25V12.9H13v8.4c0 .15.1.25.25.25h1.25c.15 0 .25-.1.25-.25V2.8c0-.2-.1-.3-.25-.3Zm5.7 11.75-2.05 1.45c-.05.05-.15 0-.15-.1v-1.45c0-.05 0-.05.05-.1l2.1-1.55c.05-.05.1-.05.1-.05h1.6c.05 0 .1.05.1.1v8.8c0 .05-.05.1-.1.1H20.3c-.05 0-.1-.05-.1-.1v-7.1Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'TextH1Thin';
