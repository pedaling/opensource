import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'pinslash-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M21.045 22.601a.25.25 0 0 0 .354 0l1.202-1.202a.25.25 0 0 0 0-.354L18.056 16.5h2.694c.15 0 .25-.1.25-.25 0-.05 0-.1-.05-.1l-3.5-6.5c-.05-.05-.05-.15-.05-.25V2.25c0-.15-.1-.25-.25-.25H6.85c-.15 0-.25.1-.25.25v2.794L2.955 1.4a.25.25 0 0 0-.354 0L1.399 2.6a.25.25 0 0 0 0 .354zM9.05 7.494 15.556 14H17l-1.75-3.25c-.25-.4-.35-.9-.35-1.4V4.5H9.05z"
      clipRule="evenodd"
    />
    <Svg.Path d="m7 14 .848-1.596-1.825-1.825L3.05 16.1c-.05.05-.05.1-.05.15 0 .15.1.25.25.25h7.5v4.6c0 .1.05.2.1.25l.95 1.55c.05.1.15.1.2.1s.15-.05.2-.1l.95-1.55q.02-.04.04-.072a.33.33 0 0 0 .06-.178v-3.294L9.444 14z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'PinSlashRegular';
