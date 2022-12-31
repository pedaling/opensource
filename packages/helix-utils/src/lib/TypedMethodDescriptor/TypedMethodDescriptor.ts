export type TypedMethodDescriptor<Target> = {
  enumerable?: boolean;
  configurable?: boolean;
  writable?: boolean;
  value?: Target;
  get?: () => Target;
};
