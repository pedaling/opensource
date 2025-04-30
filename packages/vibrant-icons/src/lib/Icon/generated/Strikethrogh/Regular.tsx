import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'strikethrogh-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 2.45c-3.955 0-6.55 2.738-6.55 5.3 0 1.28.496 2.328 1.278 3.15H2v2.2h8.978q.407.101.822.181c1.522.294 2.806.644 3.695 1.161.835.486 1.205 1.038 1.205 1.808 0 .9-.39 1.657-1.148 2.22-.782.58-2 .98-3.629.98-1.315 0-2.566-.469-3.474-1.192-.914-.728-1.399-1.637-1.399-2.508h-2.1c0 1.674.92 3.14 2.191 4.15 1.276 1.016 2.986 1.65 4.782 1.65 1.948 0 3.644-.475 4.881-1.394 1.262-.938 1.996-2.306 1.996-3.906 0-1.398-.637-2.419-1.554-3.15H22v-2.2H10.898c-.874-.266-1.612-.611-2.17-1.027C7.942 9.29 7.55 8.6 7.55 7.75c0-1.168 1.405-3.2 4.45-3.2 2.612 0 4.25 1.705 4.25 3.256h2.1c0-3.06-2.962-5.356-6.35-5.356" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'StrikethroghRegular';
