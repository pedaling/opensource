import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'volume',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G clipPath="url(#id-4a)">
      <Svg.Path d="m20.6 4.4-.9.9c-.1.1-.1.25 0 .35 1.55 1.65 2.55 3.9 2.55 6.35 0 2.45-.95 4.7-2.55 6.35-.1.1-.1.25 0 .35l.9.9c.1.1.25.1.35 0 1.9-2 3.05-4.65 3.05-7.6 0-2.95-1.15-5.6-3.05-7.6-.1-.1-.25-.1-.35 0Z" />
      <Svg.Path d="m17.75 7.25-.9.9c-.1.1-.1.25 0 .35.85.95 1.35 2.2 1.35 3.55 0 1.35-.5 2.6-1.35 3.55-.1.1-.1.25 0 .35l.9.9c.1.1.25.1.35 0 1.2-1.35 1.9-3 1.9-4.85 0-1.85-.7-3.5-1.85-4.75-.1-.1-.3-.1-.4 0Zm-5-2.55v14.6l-3.9-2.85c-.15-.1-.4-.2-.6-.2h-5.5v-8.5h5.5c.2 0 .4-.05.6-.2l3.9-2.85Zm1.5-3.2c-.05 0-.1 0-.15.05L8.15 5.9c-.1.05-.2.1-.3.1h-6.6C1.1 6 1 6.1 1 6.25v11.5c0 .15.1.25.25.25h6.6c.1 0 .2.05.3.1l6 4.35c.05.05.1.05.15.05.15 0 .25-.1.25-.25V1.75c-.05-.15-.15-.25-.3-.25Z" />
    </Svg.G>
    <Svg.Defs>
      <Svg.ClipPath id="id-4a">
        <Svg.Path d="M0 0h24v24H0z" />
      </Svg.ClipPath>
    </Svg.Defs>
  </Svg>
);

Thin.iconType = 'Thin';
