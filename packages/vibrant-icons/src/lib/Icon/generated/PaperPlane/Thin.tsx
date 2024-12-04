import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'paperplane-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.75606 11.4968L12.738 9.84016C12.8345 9.78652 12.8693 9.66476 12.8157 9.5682L12.1843 8.4318C12.1307 8.33524 12.0089 8.30045 11.9124 8.35409L8.96157 9.99343L4.60227 4.7H19.9975L11.6237 18.6562L9.75606 11.4968ZM11.2449 22.5919C11.1537 22.7438 10.9246 22.7109 10.8799 22.5395L8 11.5L1.26941 3.32714C1.16196 3.19667 1.25478 3 1.4238 3H22.6468C22.8022 3 22.8982 3.16959 22.8183 3.3029L11.2449 22.5919Z"
    />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'PaperPlaneThin';
