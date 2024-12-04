import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'volumemute-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M7.20448 5.64899L2.95454 1.39906C2.85691 1.30143 2.69862 1.30143 2.60099 1.39906L1.39891 2.60114C1.30128 2.69877 1.30128 2.85706 1.39891 2.95469L21.0454 22.6011C21.143 22.6988 21.3013 22.6988 21.3989 22.6011L22.601 21.3991C22.6986 21.3014 22.6986 21.1431 22.601 21.0455L19.1 17.5445V1.4977C19.1 1.30338 18.888 1.18335 18.7214 1.28333L11.4455 5.64899H7.20448Z" />
    <Svg.Path d="M13.6815 20.2953C13.7258 20.3308 13.7809 20.3501 13.8377 20.3501H15.3115C15.4896 20.3501 15.5789 20.1347 15.4529 20.0087L3.89999 8.45577V18.099C3.89999 18.2371 4.01192 18.349 4.14999 18.349H11.25L13.6815 20.2953Z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'VolumeMuteFill';
