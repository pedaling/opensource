import type { CurrentTheme } from '@vibrant-ui/theme';

export type StyleObject = {
  [property: string]: any;
};

export type BuildStyleFn = (_: { styleObjects: StyleObject[]; theme: CurrentTheme }) => Record<string, any>;
