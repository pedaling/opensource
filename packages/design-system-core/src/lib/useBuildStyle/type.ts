import type { CurrentTheme } from '@class101/design-system-theme';

type StyleObject = {
  [property: string]: any;
};

export type BuildStyleFn = (styleObjects: StyleObject[], info: { theme?: CurrentTheme }) => Record<string, any>;
