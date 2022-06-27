import type { BoxProps, ResponsiveValue } from '@class101/design-system-core';

export type IconProps = Pick<BoxProps, 'fill'> & { size?: ResponsiveValue<number> };
