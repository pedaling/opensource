import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'volumemute-regular',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.7214 1.28333C18.888 1.18335 19.1 1.30338 19.1 1.4977V17.5445L22.601 21.0455C22.6986 21.1431 22.6986 21.3014 22.601 21.3991L21.3989 22.6011C21.3013 22.6988 21.143 22.6988 21.0454 22.6011L1.39891 2.95469C1.30128 2.85706 1.30128 2.69877 1.39891 2.60114L2.60099 1.39906C2.69862 1.30143 2.85691 1.30143 2.95454 1.39906L7.20448 5.64899H11.4455L18.7214 1.28333ZM9.40448 7.84899L16.9 15.3445V4.94184L12.0549 7.84899H9.40448Z"
    />
    <Svg.Path d="M15.4529 20.0087C15.5789 20.1347 15.4896 20.3501 15.3114 20.3501H13.8282C13.7772 20.3501 13.7275 20.3345 13.6857 20.3055L11.3642 18.349H4.14999C4.01192 18.349 3.89999 18.2371 3.89999 18.099V8.45579L6.09999 10.6558V16.149H11.5932L15.4529 20.0087Z" />
  </Svg>
);

Regular.iconType = 'Regular';
