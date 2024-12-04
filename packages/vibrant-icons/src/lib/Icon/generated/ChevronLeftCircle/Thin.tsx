import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chevronleftcircle-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M13.689 6.35092C13.6109 6.27281 13.4842 6.27282 13.4061 6.35095L7.90009 11.8591C7.82202 11.9372 7.82202 12.0638 7.90009 12.1419L13.406 17.6495C13.4841 17.7276 13.6107 17.7276 13.6889 17.6495L14.6085 16.7299C14.6866 16.6518 14.6866 16.5252 14.6085 16.4471L10.1632 12L14.6087 7.55339C14.6868 7.47529 14.6867 7.34867 14.6086 7.27057L13.689 6.35092Z" />
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.15015 11.9999C1.15015 17.9924 6.00764 22.8499 12.0001 22.8499C17.9926 22.8499 22.8501 17.9924 22.8501 11.9999C22.8501 6.0074 17.9926 1.1499 12.0001 1.1499C6.00764 1.1499 1.15015 6.0074 1.15015 11.9999ZM21.1501 11.9999C21.1501 17.0454 17.0456 21.1499 12.0001 21.1499C6.95465 21.1499 2.85015 17.0454 2.85015 11.9999C2.85015 6.9544 6.95465 2.8499 12.0001 2.8499C17.0456 2.8499 21.1501 6.9544 21.1501 11.9999Z"
    />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'ChevronLeftCircleThin';
