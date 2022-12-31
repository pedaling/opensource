export type Class<Target = any> = new (...args: any) => Target;

export type AnyClass = Class<any>;
