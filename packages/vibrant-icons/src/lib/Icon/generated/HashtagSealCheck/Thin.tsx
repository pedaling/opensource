import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'hashtagsealcheck-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M17.318 12.22c-.098.03-.182.114-.351.28l-1.042 1.02-1.458.015c-.237.002-.355.004-.446.05a.43.43 0 0 0-.186.186c-.046.09-.048.21-.05.446l-.015 1.458-1.02 1.042c-.166.169-.25.254-.28.35a.43.43 0 0 0 0 .264c.03.097.114.181.28.35l1.02 1.042.015 1.458c.002.237.004.355.05.446a.43.43 0 0 0 .186.186c.09.047.21.048.446.05l1.458.016 1.042 1.02c.169.166.254.248.35.28a.43.43 0 0 0 .264 0c.097-.031.181-.114.35-.28l1.042-1.02 1.458-.015c.237-.003.355-.004.446-.05a.43.43 0 0 0 .186-.187c.047-.09.048-.209.05-.446l.016-1.458 1.02-1.041c.166-.17.248-.254.28-.351a.43.43 0 0 0 0-.263c-.031-.098-.114-.182-.28-.351l-1.02-1.042-.015-1.458c-.003-.237-.004-.355-.05-.446a.43.43 0 0 0-.187-.186c-.09-.046-.209-.048-.446-.05l-1.458-.015-1.041-1.02c-.17-.166-.254-.25-.351-.28a.43.43 0 0 0-.263 0m2.562 4.31-1.06-1.06-1.72 1.72-.97-.97-1.06 1.06 2.03 2.03z"
      clipRule="evenodd"
    />
    <Svg.Path d="m10 2.25-.628 4.9h6.5l.628-4.9h1.75l-.628 4.9h4.128l-.128 1.7h-4.218l-.34 2.65h-1.75l.34-2.65h-6.5l-.808 6.3h3.404v1.7H8.128l-.628 4.9H5.75l.628-4.9H2.25l.128-1.7h4.218l.808-6.3H3.125l.128-1.7h4.369l.628-4.9z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'HashtagSealCheckThin';
