import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'hashtaglock-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path d="m9.84423 6.90002.65577-4.65002h-2.25l-.65577 4.65002h-4.34423l-.125 2.2h4.15897l-.81795 5.79998h-4.09102l-.125 2.2h3.90577l-.65577 4.65h2.25l.65577-4.65h2.84423v-2.2h-2.53398l.81795-5.79998h5.75003l-.1622 1.14998h2.25l.1622-1.14998h4.091l.125-2.2h-3.9058l.6558-4.65002h-2.25l-.6558 4.65002z" />
      <Svg.Path
        clipRule="evenodd"
        d="m14.6499 14.4999c0-1.7121 1.3879-3.1 3.1-3.1s3.1 1.3879 3.1 3.1v.4h1.25c.1381 0 .25.1119.25.25v6.45c0 .1381-.1119.25-.25.25h-8.7c-.1381 0-.25-.1119-.25-.25v-6.45c0-.1381.1119-.25.25-.25h1.25zm4 0v.4h-1.8v-.4c0-.4971.4029-.9.9-.9s.9.4029.9.9z"
        fillRule="evenodd"
      />
    </Svg.G>
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'HashtagLockFill';
