import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'playspeedx15-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M8.665 10.288 7.462 9.085l3.336-3.335-3.336-3.336 1.203-1.202L12 4.548l3.335-3.336 1.203 1.203-3.337 3.336 3.337 3.335-1.203 1.203L12 6.953zm-3.898 4.964V16.7l1.808-1.212h.168v6.02h1.761v-7.55H6.67zm12.15 1.32c-.742 0-1.362.304-1.66.81l-.03.05h-.202l.171-2.16h3.656v-1.315h-5.023l-.318 4.419h1.541a1.3 1.3 0 0 1 .37-.395c.243-.177.552-.271.892-.271.802 0 1.362.533 1.362 1.298v.01c0 .774-.56 1.315-1.362 1.315-.642 0-1.171-.362-1.327-.903H13.38c.096 1.327 1.273 2.217 2.934 2.217 1.807 0 3.02-1.071 3.02-2.666v-.01c0-1.39-1.016-2.398-2.418-2.398m-5.651 3.223c-.507 0-.905.397-.905.904s.398.91.905.91.91-.4.91-.91-.4-.904-.91-.904" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'PlaySpeedX15Thin';
