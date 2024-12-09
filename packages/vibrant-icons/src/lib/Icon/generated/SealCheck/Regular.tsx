import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'sealcheck-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path d="M15.472 8.472 11 12.944l-2.472-2.472-1.556 1.556L11 16.056l6.028-6.028z" />
      <Svg.Path
        fillRule="evenodd"
        d="m15.536 3.463 3.382.036c.55.005.825.008 1.035.117a1 1 0 0 1 .432.431c.108.21.111.485.117 1.035l.035 3.382 2.367 2.417c.384.392.577.589.649.814a1 1 0 0 1 0 .61c-.072.226-.265.422-.65.815l-2.366 2.416-.035 3.382c-.006.55-.009.825-.117 1.035a1 1 0 0 1-.432.432c-.21.108-.485.111-1.035.117l-3.382.035-2.416 2.367c-.393.384-.59.577-.815.649a1 1 0 0 1-.61 0c-.225-.072-.422-.265-.814-.65l-2.417-2.366-3.382-.035c-.55-.006-.825-.009-1.035-.117a1 1 0 0 1-.431-.432c-.109-.21-.112-.485-.117-1.035l-.036-3.382-2.366-2.416c-.385-.393-.577-.59-.65-.815a1 1 0 0 1 0-.61c.073-.225.265-.422.65-.814l2.366-2.417.036-3.382c.005-.55.008-.825.117-1.035a1 1 0 0 1 .43-.431c.211-.109.486-.112 1.036-.117l3.382-.036 2.417-2.366c.392-.385.589-.577.814-.65a1 1 0 0 1 .61 0c.226.073.422.265.815.65zm-.907 2.191L12 3.08 9.372 5.654l-3.68.038-.038 3.68L3.08 12l2.574 2.629.038 3.679 3.68.038L12 20.921l2.629-2.575 3.679-.038.038-3.68L20.921 12l-2.575-2.628-.038-3.68z"
        clipRule="evenodd"
      />
    </Svg.G>
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'SealCheckRegular';
