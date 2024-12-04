import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'pinslash-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.0454 22.601C21.143 22.6986 21.3013 22.6986 21.3989 22.601L22.601 21.3989C22.6986 21.3013 22.6986 21.143 22.601 21.0454L18.0556 16.5H20.75C20.9 16.5 21 16.4 21 16.25C21 16.2 21 16.15 20.95 16.15L17.45 9.64996C17.4 9.59996 17.4 9.49996 17.4 9.39996V2.24996C17.4 2.09996 17.3 1.99996 17.15 1.99996H6.84996C6.69996 1.99996 6.59996 2.09996 6.59996 2.24996V5.04433L2.95454 1.39891C2.85691 1.30128 2.69862 1.30128 2.60099 1.39891L1.39891 2.60099C1.30128 2.69862 1.30128 2.85691 1.39891 2.95454L21.0454 22.601Z" />
    <Svg.Path d="M3.04996 16.1L6.02299 10.5786L13.25 17.8056V21.1C13.25 21.1732 13.2232 21.2196 13.1892 21.2784C13.1768 21.3 13.1634 21.3232 13.15 21.35L12.2 22.9C12.15 22.95 12.05 23 12 23C11.95 23 11.85 23 11.8 22.9L10.85 21.35C10.8 21.3 10.75 21.2 10.75 21.1V16.5H3.24996C3.09996 16.5 2.99996 16.4 2.99996 16.25C2.99996 16.2 2.99996 16.15 3.04996 16.1Z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'PinSlashFill';
