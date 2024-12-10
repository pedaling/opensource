import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'clearstyle-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M23 21.727a.2.2 0 0 0 0-.282l-9.8-9.801V5.8h5v1.6c0 .111.089.2.2.2h2a.2.2 0 0 0 .2-.2V3.6a.2.2 0 0 0-.2-.2H4.954L2.555 1a.2.2 0 0 0-.283 0L1 2.272a.2.2 0 0 0 0 .283L21.444 23a.2.2 0 0 0 .283 0zM10.8 9.244 7.354 5.8H10.8zM14.65 20.6a.2.2 0 0 0 .2-.2v-2a.2.2 0 0 0-.2-.2H13.2v-.902l-.03-.03-2.37-2.37V18.2H9.35a.2.2 0 0 0-.2.2v2c0 .11.089.2.2.2z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'ClearStyleFill';
