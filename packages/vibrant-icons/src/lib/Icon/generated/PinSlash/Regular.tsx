import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'pinslash-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.0454 22.601C21.143 22.6986 21.3013 22.6986 21.3989 22.601L22.601 21.3989C22.6986 21.3013 22.6986 21.143 22.601 21.0454L18.0556 16.5H20.75C20.9 16.5 21 16.4 21 16.25C21 16.2 21 16.15 20.95 16.15L17.45 9.64996C17.4 9.59996 17.4 9.49996 17.4 9.39996V2.24996C17.4 2.09996 17.3 1.99996 17.15 1.99996H6.84996C6.69996 1.99996 6.59996 2.09996 6.59996 2.24996V5.04433L2.95454 1.39891C2.85691 1.30128 2.69862 1.30128 2.60099 1.39891L1.39891 2.60099C1.30128 2.69862 1.30128 2.85691 1.39891 2.95454L21.0454 22.601ZM9.04996 7.49433L15.5556 14H17L15.25 10.75C15 10.35 14.9 9.84996 14.9 9.34996V4.49996H9.04996V7.49433Z"
    />
    <Svg.Path d="M6.99996 14L7.84801 12.4036L6.02299 10.5786L3.04996 16.1C2.99996 16.15 2.99996 16.2 2.99996 16.25C2.99996 16.4 3.09996 16.5 3.24996 16.5H10.75V21.1C10.75 21.2 10.8 21.3 10.85 21.35L11.8 22.9C11.85 23 11.95 23 12 23C12.05 23 12.15 22.95 12.2 22.9L13.15 21.35C13.1634 21.3232 13.1768 21.3 13.1892 21.2784C13.2232 21.2196 13.25 21.1732 13.25 21.1V17.8056L9.44433 14H6.99996Z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'PinSlashRegular';
