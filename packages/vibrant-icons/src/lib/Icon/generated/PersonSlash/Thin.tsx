import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'personslash-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9999 1.1499C9.36064 1.1499 7.18962 3.15472 6.92664 5.72455L2.74244 1.54035C2.66434 1.46224 2.5377 1.46224 2.4596 1.54035L1.54036 2.45959C1.46225 2.53769 1.46225 2.66432 1.54036 2.74243L21.2575 22.4596C21.3356 22.5377 21.4623 22.5377 21.5404 22.4596L22.4596 21.5403C22.5377 21.4622 22.5377 21.3356 22.4596 21.2575L12.5253 11.3232C15.0951 11.0602 17.0999 8.88918 17.0999 6.2499C17.0999 3.43325 14.8166 1.1499 11.9999 1.1499ZM10.5081 9.30599C10.9585 9.52626 11.4648 9.6499 11.9999 9.6499C13.8777 9.6499 15.3999 8.12767 15.3999 6.2499C15.3999 4.37213 13.8777 2.8499 11.9999 2.8499C10.1221 2.8499 8.59991 4.37213 8.59991 6.2499C8.59991 6.78506 8.72356 7.29134 8.94383 7.74174C9.27617 8.42119 9.82863 8.97365 10.5081 9.30599Z"
    />
    <Svg.Path d="M2.89991 21.7499C2.89991 17.5923 5.55023 14.043 9.2358 12.8383L10.6289 14.2313C7.21237 14.8946 4.59991 17.9902 4.59991 21.7499H2.89991Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'PersonSlashThin';
