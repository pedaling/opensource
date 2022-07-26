type StyleObject = {
  [property: string]: any;
};

export type BuildStyleFn = (styleObjects: StyleObject[]) => Record<string, any>;
