import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chevronrightcircle-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.899902 11.9999C0.899902 9.0349 2.0544 6.2479 4.1509 4.1514C6.2479 2.0544 9.0349 0.899902 11.9999 0.899902C14.9649 0.899902 17.7519 2.0549 19.8484 4.1514C21.9454 6.2479 23.0999 9.0349 23.0999 11.9999C23.0999 14.9649 21.9449 17.7524 19.8484 19.8489C17.7519 21.9454 14.9649 23.0999 11.9999 23.0999C9.0349 23.0999 6.2479 21.9454 4.1509 19.8489C2.0544 17.7519 0.899902 14.9649 0.899902 11.9999ZM10.6142 17.97C10.6923 18.0481 10.819 18.0481 10.8971 17.97L16.7235 12.1416C16.8015 12.0635 16.8015 11.9369 16.7235 11.8588L10.8969 6.03008C10.8188 5.95194 10.6922 5.95194 10.6141 6.03007L9.34135 7.30319C9.26328 7.38128 9.26327 7.50788 9.34134 7.58598L13.7538 12.0002L9.34151 16.4141C9.26344 16.4922 9.26344 16.6188 9.34151 16.6968L10.6142 17.97Z"
    />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'ChevronRightCircleFill';
