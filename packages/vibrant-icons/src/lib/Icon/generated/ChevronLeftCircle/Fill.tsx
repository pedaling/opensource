import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chevronleftcircle-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.1001 11.9999C23.1001 14.9649 21.9456 17.7519 19.8491 19.8484C17.7521 21.9454 14.9651 23.0999 12.0001 23.0999C9.03515 23.0999 6.24815 21.9449 4.15165 19.8484C2.05465 17.7519 0.900146 14.9649 0.900146 11.9999C0.900146 9.0349 2.05515 6.2474 4.15165 4.1509C6.24815 2.0544 9.03515 0.899902 12.0001 0.899902C14.9651 0.899902 17.7521 2.0544 19.8491 4.1509C21.9456 6.2479 23.1001 9.0349 23.1001 11.9999ZM13.3858 6.02984C13.3077 5.9517 13.181 5.9517 13.1029 6.02984L7.27658 11.8582C7.19851 11.9363 7.19851 12.0629 7.27658 12.141L13.1031 17.9697C13.1812 18.0479 13.3079 18.0479 13.386 17.9697L14.6587 16.6966C14.7368 16.6185 14.7368 16.4919 14.6587 16.4138L10.2462 11.9996L14.6585 7.58575C14.7366 7.50765 14.7366 7.38105 14.6585 7.30295L13.3858 6.02984Z"
    />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'ChevronLeftCircleFill';
