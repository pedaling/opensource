import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'laurel-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M3.94 8.997q.2.423.469.794c-1.768.025-3.223.938-3.909 1.977.095 1.579 1.365 3.601 3.78 4.248q.295.079.594.12c-.99 1.215-1.29 2.707-1.062 3.82 1.183 1.05 3.512 1.582 5.677.332 1.369-.79 2.23-2.215 2.511-3.529.281 1.314 1.142 2.738 2.511 3.529 2.165 1.25 4.493.717 5.676-.332.228-1.113-.07-2.605-1.06-3.82q.298-.04.594-.12c2.415-.647 3.684-2.67 3.779-4.247-.686-1.04-2.141-1.953-3.908-1.978q.268-.37.468-.794c1.056-2.266.323-4.539-.825-5.626-1.57-.18-3.783.719-4.84 2.984-1.047 2.247-.335 4.5.796 5.598-.525.722-.814 1.524-.865 2.238-.935.12-1.756.491-2.326.98-.57-.489-1.39-.86-2.326-.98-.05-.714-.34-1.516-.865-2.238 1.131-1.098 1.843-3.351.796-5.598-1.057-2.265-3.27-3.165-4.84-2.984-1.148 1.087-1.881 3.36-.825 5.626m3.995 1.172C7.017 9.976 6.01 9.65 5.39 8.32s-.222-2.311.22-3.137c.917.192 1.924.518 2.544 1.848s.223 2.31-.22 3.137M4.693 14.47c1.418.38 2.315-.182 3.051-.761-.348-.87-.844-1.806-2.261-2.185-1.417-.38-2.314.182-3.051.761.348.87.844 1.805 2.261 2.185m3.996 4.431c1.27-.734 1.507-1.765 1.619-2.696-.862-.368-1.874-.679-3.144.055-1.271.733-1.508 1.765-1.62 2.695.862.369 1.874.68 3.145-.054m7.376-8.733c.918-.193 1.925-.519 2.545-1.848s.222-2.311-.22-3.137c-.917.192-1.924.518-2.544 1.848s-.223 2.31.22 3.137m3.242 4.302c-1.418.38-2.315-.182-3.051-.761.348-.87.844-1.806 2.261-2.185 1.417-.38 2.314.182 3.051.761-.348.87-.844 1.805-2.261 2.185m-3.996 4.431c-1.27-.734-1.507-1.765-1.619-2.696.862-.368 1.874-.679 3.144.055 1.271.733 1.508 1.765 1.62 2.695-.862.369-1.874.68-3.145-.054"
      clipRule="evenodd"
    />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'LaurelThin';
