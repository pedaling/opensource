import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chevrondowncircle-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9999 0.899902C14.9649 0.899902 17.7519 2.0544 19.8484 4.1509C21.9454 6.2479 23.0999 9.0349 23.0999 11.9999C23.0999 14.9649 21.9449 17.7519 19.8484 19.8484C17.7519 21.9454 14.9649 23.0999 11.9999 23.0999C9.0349 23.0999 6.2474 21.9449 4.1509 19.8484C2.0544 17.7519 0.899902 14.9649 0.899902 11.9999C0.899902 9.0349 2.0544 6.2479 4.1509 4.1509C6.2479 2.0544 9.0349 0.899902 11.9999 0.899902ZM6.02984 10.4142C5.9517 10.4923 5.9517 10.619 6.02984 10.6971L11.8582 16.5235C11.9363 16.6015 12.0629 16.6015 12.141 16.5235L17.9697 10.6969C18.0479 10.6188 18.0479 10.4922 17.9697 10.4141L16.6966 9.14135C16.6185 9.06328 16.4919 9.06327 16.4138 9.14134L11.9996 13.5538L7.58575 9.14151C7.50765 9.06344 7.38105 9.06344 7.30295 9.14151L6.02984 10.4142Z"
    />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'ChevronDownCircleFill';
