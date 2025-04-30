import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'drm-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M3.15 20.85V3.15h17.7v17.7zm1.7-1.7h14.3V4.85H4.85zm12.31-3.946v-4.246h-.13l-.765 4.246h-.843l-.77-4.246h-.133v4.246h-.942V8.827h1.456l.754 4.26h.11l.757-4.26h1.452v6.377zm-5.196 0-.64-2.357h-.418v2.357H9.81V8.827h1.667c.347 0 .64.075.87.223q.346.224.52.659c.116.293.175.656.175 1.079v.009c0 .416-.058.78-.174 1.08-.115.295-.276.52-.48.666l-.03.02.764 2.64h-1.16zm-1.058-3.334h.399a.51.51 0 0 0 .468-.25q.145-.24.145-.729v-.009c0-.322-.05-.566-.147-.724a.51.51 0 0 0-.467-.25h-.398zM5.9 15.204V8.827h1.53c.42 0 .779.113 1.067.335s.51.57.661 1.03c.152.467.23 1.068.23 1.79v.009c0 .718-.078 1.324-.23 1.8-.15.472-.374.83-.663 1.063-.287.232-.646.35-1.065.35zM7 14.038h.28a.8.8 0 0 0 .546-.201q.22-.2.333-.654c.073-.295.11-.696.11-1.192v-.01c0-.477-.037-.865-.11-1.152-.076-.292-.188-.507-.335-.637a.8.8 0 0 0-.545-.2h-.28z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'DrmThin';
