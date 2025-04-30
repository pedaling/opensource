import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'hashtagsealcheck-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M10.5 2.25 9.844 6.9h5.75l.656-4.65h2.25l-.656 4.65h3.906l-.125 2.2h-4.091l-.268 1.9h-2.25l.268-1.9h-5.75l-.818 5.8h2.534v2.2H8.406l-.656 4.65H5.5l.656-4.65H2.25l.125-2.2h4.091l.818-5.8H3.125l.125-2.2h4.344l.656-4.65z" />
    <Svg.Path
      fillRule="evenodd"
      d="M17.318 12.22c-.098.03-.182.114-.351.28l-1.042 1.02-1.458.015c-.237.002-.355.004-.446.05a.43.43 0 0 0-.186.186c-.046.09-.048.21-.05.446l-.015 1.458-1.02 1.042c-.166.169-.25.254-.28.35a.43.43 0 0 0 0 .264c.03.097.114.181.28.35l1.02 1.042.015 1.458c.002.237.004.355.05.446a.43.43 0 0 0 .186.186c.09.047.21.048.446.05l1.458.016 1.042 1.02c.169.166.254.248.35.28a.43.43 0 0 0 .264 0c.097-.031.181-.114.35-.28l1.042-1.02 1.458-.015c.237-.003.355-.004.446-.05a.43.43 0 0 0 .186-.187c.047-.09.048-.209.05-.446l.016-1.458 1.02-1.041c.166-.17.248-.254.28-.351a.43.43 0 0 0 0-.263c-.031-.098-.114-.182-.28-.351l-1.02-1.042-.015-1.458c-.003-.237-.004-.355-.05-.446a.43.43 0 0 0-.187-.186c-.09-.046-.209-.048-.446-.05l-1.458-.015-1.041-1.02c-.17-.166-.254-.25-.351-.28a.43.43 0 0 0-.263 0m2.562 4.31-1.06-1.06-1.72 1.72-.97-.97-1.06 1.06 2.03 2.03z"
      clipRule="evenodd"
    />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'HashtagSealCheckFill';
