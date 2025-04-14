import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'hashtagseal-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M10.5 2.25L9.84423 6.90002H15.5942L16.25 2.25H18.5L17.8442 6.90002H21.75L21.625 9.10002H17.534L17.266 11H15.016L15.284 9.10002H9.53397L8.71602 14.9H11.25V17.1H8.40577L7.75 21.75H5.5L6.15577 17.1H2.25L2.375 14.9H6.46602L7.28397 9.10002H3.125L3.25 6.90002H7.59423L8.25 2.25H10.5Z" />
    <Svg.Path d="M16.9671 12.5C17.1364 12.3343 17.221 12.2514 17.3182 12.2203C17.4037 12.1929 17.4957 12.1929 17.5812 12.2203C17.6784 12.2514 17.763 12.3343 17.9323 12.5L18.9738 13.5202L20.4316 13.5353C20.6685 13.5378 20.787 13.539 20.8777 13.5857C20.9576 13.6268 21.0226 13.6918 21.0637 13.7717C21.1104 13.8624 21.1116 13.9809 21.1141 14.2178L21.1292 15.6756L22.1494 16.7171C22.3151 16.8864 22.398 16.971 22.4292 17.0682C22.4566 17.1537 22.4566 17.2457 22.4292 17.3312C22.398 17.4284 22.3151 17.513 22.1494 17.6823L21.1292 18.7238L21.1141 20.1816C21.1116 20.4185 21.1104 20.537 21.0637 20.6277C21.0226 20.7076 20.9576 20.7726 20.8777 20.8137C20.787 20.8604 20.6685 20.8616 20.4316 20.8641L18.9738 20.8792L17.9323 21.8994C17.763 22.0651 17.6784 22.148 17.5812 22.1792C17.4957 22.2066 17.4037 22.2066 17.3182 22.1792C17.221 22.148 17.1364 22.0651 16.9671 21.8994L15.9256 20.8792L14.4678 20.8641C14.2309 20.8616 14.1124 20.8604 14.0217 20.8137C13.9418 20.7726 13.8768 20.7076 13.8357 20.6277C13.789 20.537 13.7878 20.4185 13.7853 20.1816L13.7702 18.7238L12.75 17.6823C12.5843 17.513 12.5014 17.4284 12.4703 17.3312C12.4429 17.2457 12.4429 17.1537 12.4703 17.0682C12.5014 16.971 12.5843 16.8864 12.75 16.7171L13.7702 15.6756L13.7853 14.2178C13.7878 13.9809 13.789 13.8624 13.8357 13.7717C13.8768 13.6918 13.9418 13.6268 14.0217 13.5857C14.1124 13.539 14.2309 13.5378 14.4678 13.5353L15.9256 13.5202L16.9671 12.5Z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'HashtagSealFill';
