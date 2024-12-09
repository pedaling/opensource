import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'eyeoff-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.25 12.75c0 .15.1.25.25.25h1.25c.15 0 .25-.1.25-.25-.05-2.2-.85-4.25-2.1-5.9L19.65 8.1c.95 1.3 1.55 2.9 1.6 4.65m.7-9.8-.9-.9c-.1-.1-.25-.1-.35 0L18.35 4.4c-1.8-1.2-4-1.9-6.35-1.9-6 0-10.85 4.55-11 10.25 0 .15.1.25.25.25H2.5c.15 0 .25-.1.25-.25C2.9 8.05 7 4.25 12 4.25c1.85 0 3.6.55 5.05 1.45L13.9 8.85c-.55-.25-1.2-.35-1.9-.35-3.3 0-6 2.7-6 6 0 .7.1 1.35.35 1.95L2.1 20.7c-.1.1-.1.25 0 .35l.9.9c.1.1.25.1.35 0L21.9 3.3c.1-.1.15-.25.05-.35M7.8 15q-.075 0 0 0c0-.15-.05-.35-.05-.5 0-2.35 1.9-4.25 4.25-4.25.15 0 .35 0 .5.05zm8.35.4c-.35 1.6-1.65 2.9-3.25 3.25-1.2.25-2.35 0-3.25-.6L8.4 19.3c1.2.9 2.8 1.4 4.5 1.15 2.55-.4 4.65-2.45 5.05-5.05.25-1.7-.2-3.3-1.15-4.5l-1.25 1.25c.6.9.85 2.05.6 3.25" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'EyeOffThin';
