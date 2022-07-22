import type { SystemPropThemeScale } from '@vibrant-ui/core';
import { useCurrentTheme } from '@vibrant-ui/core';
import { get } from '@vibrant-ui/utils';
import type { Animation } from '../types';

export type StyleConfig<Props extends { style: Record<string, Animation<any>> }> = {
  name: keyof Props['style'] & string;
  scale: SystemPropThemeScale;
};

export const motionVariant =
  <Props extends { style: Record<string, Animation<any>> }, Config extends StyleConfig<Props>>({
    name,
    scale,
  }: Config): ((props: Props) => Props) =>
  props => {
    const { theme } = useCurrentTheme();

    if (props.style[name] === undefined) {
      return props;
    }

    const motionStyle: Record<string, any> = { ...props.style[name] };

    for (const key of Object.keys(props.style[name])) {
      motionStyle[key] = get(theme, `${scale}.${motionStyle[key]}`);
    }

    return { ...props, style: { ...props.style, [name]: motionStyle } };
  };
