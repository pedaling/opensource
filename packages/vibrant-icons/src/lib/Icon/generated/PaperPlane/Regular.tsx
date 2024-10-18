import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'paperplane-regular',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.2725 11.4958L12.8594 10.0587C12.9559 10.0051 12.9907 9.8833 12.9371 9.78674L12.0629 8.21326C12.0093 8.1167 11.8875 8.08191 11.791 8.13556L9.24438 9.55032L5.66177 5.2H19.1144L11.8072 17.3787L10.2725 11.4958ZM11.2449 22.5919C11.1537 22.7438 10.9246 22.7109 10.8799 22.5395L8 11.5L1.26941 3.32714C1.16196 3.19667 1.25478 3 1.4238 3H22.6468C22.8022 3 22.8982 3.16959 22.8183 3.3029L11.2449 22.5919Z"
    />
  </Svg>
);

Regular.iconType = 'Regular';
