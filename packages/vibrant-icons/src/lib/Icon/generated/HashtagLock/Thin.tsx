import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'hashtaglock-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path d="m10 2.25-.62821 4.90002h6.50001l.6282-4.90002h1.75l-.6282 4.90002h4.1282l-.1284 1.7h-4.2178l-.2115 1.64998h-1.75l.2115-1.64998h-6.49996l-.80769 6.29998h3.40385v1.7h-3.6218l-.6282 4.9h-1.75l.6282-4.9h-4.1282l.12845-1.7h4.2177l.80769-6.29998h-4.27884l.12845-1.7h4.36834l.62821-4.90002z" />
      <Svg.Path
        clipRule="evenodd"
        d="m20.6 15.1499h1.25c.1381 0 .25.1119.25.25v6.2c0 .1381-.1119.25-.25.25h-8.2c-.138 0-.25-.1119-.25-.25v-6.2c0-.1381.112-.25.25-.25h1.25v-.65c0-1.574 1.276-2.85 2.85-2.85s2.85 1.276 2.85 2.85zm-.2 1.7h-5.3v3.3h5.3zm-1.5-1.7v-.65c0-.6351-.5148-1.15-1.15-1.15-.6351 0-1.15.5149-1.15 1.15v.65z"
        fillRule="evenodd"
      />
    </Svg.G>
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'HashtagLockThin';
