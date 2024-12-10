import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'sealcheck-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M11.695.448c-.225.072-.422.264-.814.649L8.464 3.463 5.082 3.5c-.55.005-.825.008-1.035.117a1 1 0 0 0-.431.431c-.109.21-.112.485-.117 1.035l-.036 3.382-2.366 2.417c-.385.392-.577.589-.65.814a1 1 0 0 0 0 .61c.073.226.265.422.65.815l2.366 2.416.036 3.382c.005.55.008.825.117 1.035a1 1 0 0 0 .43.432c.211.108.486.111 1.036.117l3.382.035 2.417 2.367c.392.384.589.577.814.649a1 1 0 0 0 .61 0c.226-.072.422-.265.815-.65l2.416-2.366 3.382-.035c.55-.006.825-.009 1.035-.117a1 1 0 0 0 .432-.432c.108-.21.111-.485.117-1.035l.035-3.382 2.367-2.416c.384-.393.577-.59.649-.815a1 1 0 0 0 0-.61c-.072-.225-.265-.422-.65-.814l-2.366-2.417-.035-3.382c-.006-.55-.009-.825-.117-1.035a1 1 0 0 0-.432-.431c-.21-.109-.485-.112-1.035-.117l-3.382-.036-2.416-2.366c-.393-.385-.59-.577-.815-.65a1 1 0 0 0-.61 0m3.777 8.024L11 12.944l-2.472-2.472-1.556 1.556L11 16.056l6.028-6.028z"
      clipRule="evenodd"
    />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'SealCheckFill';
