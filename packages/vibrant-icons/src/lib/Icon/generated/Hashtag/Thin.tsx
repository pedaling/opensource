import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'hashtag-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.37179 7.15002L10 2.25H8.25L7.62179 7.15002H3.25345L3.125 8.85002H7.40384L6.59615 15.15H2.37845L2.25 16.85H6.3782L5.75 21.75H7.5L8.1282 16.85H14.6282L14 21.75H15.75L16.3782 16.85H20.7466L20.875 15.15H16.5962L17.4038 8.85002H21.6216L21.75 7.15002H17.6218L18.25 2.25H16.5L15.8718 7.15002H9.37179ZM14.8462 15.15L15.6538 8.85002H9.15384L8.34615 15.15H14.8462Z"
    />
  </Svg>
);

Thin.iconType = 'Thin';
