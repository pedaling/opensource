export type DistributiveOmit<Obj, Keys extends keyof any> = Obj extends any ? Omit<Obj, Keys> : never;
