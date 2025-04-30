import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'drm-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M2.9 21.1V2.9h18.2v18.2zm16-2.2V5.1H5.1v13.8zM5.8 15.304V8.727h1.63c.442 0 .822.12 1.127.356q.459.356.696 1.079c.155.475.234 1.088.234 1.82v.008c0 .73-.08 1.345-.234 1.831-.157.49-.39.864-.695 1.11-.306.247-.686.373-1.129.373zm1.479-1.366q.285 0 .48-.175.196-.18.302-.604c.072-.287.108-.68.108-1.168v-.01c0-.469-.036-.848-.108-1.127q-.105-.41-.304-.588a.7.7 0 0 0-.478-.173h-.18v3.845zm4.608 1.366-.64-2.357h-.241v2.357H9.71V8.727h1.766c.367 0 .678.08.925.239q.372.24.558.706.182.46.183 1.116v.009c0 .429-.061.804-.181 1.115-.116.3-.28.533-.486.69l.78 2.702zm-.583-3.534q.26.001.383-.202.13-.216.13-.677v-.009c0-.303-.044-.53-.132-.671a.42.42 0 0 0-.38-.203h-.299v1.762zm6.9 3.534V8.727H16.57l-.728 4.094-.725-4.094h-1.64v6.576h1.142v-3.965l.72 3.965h1.01l.712-3.95v3.95z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'DrmRegular';
