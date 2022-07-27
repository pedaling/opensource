import type { SystemPropThemeScale } from '@vibrant-ui/core';
import { useCurrentTheme } from '@vibrant-ui/core';
import { get, isRecord } from '@vibrant-ui/utils';

export type StyleConfig<Props extends { animation: any }> = {
  name: string & keyof Props['animation'];
  scale: SystemPropThemeScale;
};

export const motionVariant =
  <Props extends { animation: Record<string, any> }, Config extends StyleConfig<Props>>({
    name,
    scale,
  }: Config): ((props: Props) => Props) =>
  props => {
    const { theme } = useCurrentTheme();

    if (props.animation[name] === undefined) {
      return props;
    }

    if (!isRecord(props.animation[name])) {
      return {
        ...props,
        animation: {
          ...props.animation,
          [name]: get(theme, `${scale}.${props.animation[name]}`, props.animation[name]),
        },
      };
    }

    const motionStyle: Record<string, any> = { ...props.animation[name] };

    for (const key of Object.keys(props.animation[name])) {
      motionStyle[key] = get(theme, `${scale}.${motionStyle[key]}`, motionStyle[key]);
    }

    return { ...props, animation: { ...props.animation, [name]: motionStyle } };
  };
