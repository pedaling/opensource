import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'clap-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M11.6 3.5h.15c.45.1.75.5.75.9v6.35c0 .35.3.6.6.6s.6-.3.6-.6v-5.4c0-.5.4-.9.9-.9h.15c.45.15.75.55.75.95v5.35c0 .35.3.6.6.6s.6-.3.6-.6v-2.6c0-.45.3-.85.75-.9h.15c.5 0 .9.4.9.9v5.7c0 3.5-2.65 6.5-6.15 6.65H12c-3 0-5.5-2-6.25-4.75l-1.15-4.3c-.15-.5.2-1.05.75-1.1h.1c.4 0 .75.3.85.7l.75 2.7c.05.15.2.25.35.25.2 0 .4-.15.4-.4V5.35c0-.5.4-.9.9-.9h.15c.35.15.65.55.65.95v5.35c0 .35.3.6.6.6s.6-.3.6-.6v-6.4c.05-.45.4-.85.9-.85Zm0-2.5c-.9 0-1.75.35-2.4 1l-.05.05C8.95 2 8.8 2 8.6 2c-.9 0-1.75.35-2.4 1-.65.65-1 1.5-1 2.4v2.45h-.15c-1 .1-1.9.65-2.45 1.45-.55.8-.75 1.85-.5 2.8l1.15 4.35C4.4 20.3 7.95 23 12 23h.45c4.8-.25 8.55-4.3 8.55-9.2V8.1c0-1.75-1.35-3.2-3.05-3.35-.25-1.4-1.35-2.5-2.75-2.7-.25-.05-.4-.05-.6-.05-.2 0-.4 0-.55.05-.5-.5-1.15-.9-1.9-1C11.95 1 11.8 1 11.6 1Z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'ClapRegular';
