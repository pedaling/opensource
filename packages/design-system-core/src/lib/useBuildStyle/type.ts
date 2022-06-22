import type { Theme } from '../types';

type StyleObject = {
  [property: string]: any;
};

export type BuildStyleFn = (styleObjects: StyleObject[], info: { theme?: Theme }) => Record<string, any>;
