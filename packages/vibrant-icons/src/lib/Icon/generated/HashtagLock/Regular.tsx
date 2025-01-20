import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'hashtaglock-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path d="m10.5 2.25-.65577 4.65002h5.74997l.6558-4.65002h2.25l-.6558 4.65002h3.9058l-.125 2.2h-4.091l-.1622 1.14998h-2.25l.1622-1.14998h-5.75003l-.81795 5.79998h2.53398v2.2h-2.84423l-.65577 4.65h-2.25l.65577-4.65h-3.90577l.125-2.2h4.09102l.81795-5.79998h-4.15897l.125-2.2h4.34423l.65577-4.65002z" />
      <Svg.Path
        clipRule="evenodd"
        d="m20.8499 14.8999h1.25c.1381 0 .25.1119.25.25v6.45c0 .1381-.1119.25-.25.25h-8.7c-.1381 0-.25-.1119-.25-.25v-6.45c0-.1381.1119-.25.25-.25h1.25v-.4c0-1.7121 1.3879-3.1 3.1-3.1s3.1 1.3879 3.1 3.1zm-.7 2.2h-4.8v2.55h4.8zm-1.5-2.2v-.4c0-.4971-.4029-.9-.9-.9s-.9.4029-.9.9v.4z"
        fillRule="evenodd"
      />
    </Svg.G>
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'HashtagLockRegular';
