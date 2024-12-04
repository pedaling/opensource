import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'totebagplay-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      clipRule="evenodd"
      d="m2.62547 21.391c.02133.2594.23806.459.49832.459h17.75231c.2603 0 .477-.1996.4983-.459l1.1963-14.54998c.024-.29132-.206-.54097-.4983-.54097h-5.4727v-1.02501c0-2.4675-2.0075-4.474991-4.475-4.474991h-.25c-2.46748 0-4.47498 2.007491-4.47498 4.474991v1.02501h-5.47268c-.29231 0-.52228.24966-.49832.54098zm11.77423-16.11596v1.02501h-4.79998v-1.02501c0-1.25449 1.02048-2.275 2.27498-2.275h.25c1.2545 0 2.275 1.02051 2.275 2.275zm1.6002 8.97496-6.49996-3.5.2 7z"
      fillRule="evenodd"
    />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'ToteBagPlayFill';
