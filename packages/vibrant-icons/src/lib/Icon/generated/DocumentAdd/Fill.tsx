import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'documentadd-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path
        clipRule="evenodd"
        d="m3.6499 23.1004c-.13807 0-.25-.1119-.25-.25v-21.70001c0-.13807.11193-.249999.25-.249999h10.639l6.311 6.312499v5.78711h-4.3499v3.25h-3v6.8504zm9.75-19.97701v4.977h4.9765z"
        fillRule="evenodd"
      />
      <Svg.Path d="m18.2749 20.4754v3.125h2.2v-3.125h3.125v-2.2h-3.125v-3.125h-2.2v3.125h-3.125v2.2z" />
    </Svg.G>
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'DocumentAddFill';
