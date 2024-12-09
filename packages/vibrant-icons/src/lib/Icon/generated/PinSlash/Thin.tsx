import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'pinslash-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M2.778 1.576a.25.25 0 0 0-.354 0l-.848.848a.25.25 0 0 0 0 .354l19.646 19.646a.25.25 0 0 0 .354 0l.848-.848a.25.25 0 0 0 0-.354L17.702 16.5h3.048c.15 0 .25-.1.25-.25v-.1l-3.5-6.5c-.05-.05-.05-.15-.05-.25V2.25c0-.15-.1-.25-.25-.25H6.85c-.15 0-.25.1-.25.25v3.148zM8.3 7.098l7.602 7.602h2.248l-2.3-4.3c-.15-.3-.25-.7-.25-1.05v-5.6H8.3z"
      clipRule="evenodd"
    />
    <Svg.Path d="m3.05 16.1 3.307-6.14 1.274 1.273L5.777 14.7h5.32l1.803 1.802V21.7c0 .073-.027.12-.06.178q-.02.032-.04.072l-.6.95a.4.4 0 0 1-.2.1c-.05 0-.15 0-.2-.1l-.6-.95a.38.38 0 0 1-.1-.25v-5.2H3.25c-.15 0-.25-.1-.25-.25 0-.05 0-.1.05-.15" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'PinSlashThin';
