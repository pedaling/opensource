import type { CurrentTheme } from '@vibrant-ui/theme';

type StyleObject = {
  [property: string]: any;
};

export type BuildStyleFn = (styleObjects: StyleObject[], info: { theme?: CurrentTheme }) => Record<string, any>;
