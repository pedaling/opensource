import type { SystemPropThemeScale } from '@vibrant-ui/core';
import { useCurrentTheme } from '@vibrant-ui/core';
import { get } from '@vibrant-ui/utils';
import type { Animation } from '../types';

export type StyleConfig<Props extends { style: Record<string, Animation<any>> }> = {
  name: keyof Props['style'];
  scale: SystemPropThemeScale;
};

export const motionVariant =
  <Props extends { style: Record<string, Animation<any>> }, Config extends StyleConfig<Props>>({
    name,
    scale,
  }: Config): ((props: Props) => Props) =>
  props => {
    const { theme } = useCurrentTheme();

    if (props.style[name as string] === undefined) {
      return props;
    }

    for (const key of Object.keys(props.style[name as string])) {
      (props.style as any)[name][key] = get(theme, `${scale}.${(props.style as any)[name][key]}`);
    }

    return props;
  };
