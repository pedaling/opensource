import type { SystemPropThemeScale } from '@vibrant-ui/core';
import { useCurrentTheme } from '@vibrant-ui/core';
import { get, isRecord } from '@vibrant-ui/utils';

export type StyleConfig<Props extends { style: any }> = {
  name: keyof Props['style'] & string;
  scale: SystemPropThemeScale;
};

export const motionVariant =
  <Props extends { style: Record<string, any> }, Config extends StyleConfig<Props>>({
    name,
    scale,
  }: Config): ((props: Props) => Props) =>
  props => {
    const { theme } = useCurrentTheme();

    if (props.style[name] === undefined) {
      return props;
    }

    if (!isRecord(props.style[name])) {
      return { ...props, style: { ...props.style, [name]: get(theme, `${scale}.${props.style[name]}`) } };
    }

    const motionStyle: Record<string, any> = { ...props.style[name] };

    for (const key of Object.keys(props.style[name])) {
      motionStyle[key] = get(theme, `${scale}.${motionStyle[key]}`);
    }

    return { ...props, style: { ...props.style, [name]: motionStyle } };
  };
