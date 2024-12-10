import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'pinslash-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.045 22.601a.25.25 0 0 0 .354 0l1.202-1.202a.25.25 0 0 0 0-.354L18.056 16.5h2.694c.15 0 .25-.1.25-.25 0-.05 0-.1-.05-.1l-3.5-6.5c-.05-.05-.05-.15-.05-.25V2.25c0-.15-.1-.25-.25-.25H6.85c-.15 0-.25.1-.25.25v2.794L2.955 1.4a.25.25 0 0 0-.354 0L1.399 2.6a.25.25 0 0 0 0 .354zM3.05 16.1l2.973-5.521 7.227 7.227V21.1c0 .073-.027.12-.06.178q-.02.032-.04.072l-.95 1.55a.4.4 0 0 1-.2.1c-.05 0-.15 0-.2-.1l-.95-1.55a.38.38 0 0 1-.1-.25v-4.6h-7.5c-.15 0-.25-.1-.25-.25 0-.05 0-.1.05-.15" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'PinSlashFill';
