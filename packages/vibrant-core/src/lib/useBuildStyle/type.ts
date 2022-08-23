import type { CurrentTheme } from '@vibrant-ui/theme';

type StyleObject = {
  [property: string]: any;
};

export type BuildStyleFn = (_: {
  styleObjects: StyleObject[];
  theme: CurrentTheme;
  breakpointIndex: number;
}) => Record<string, any>;
