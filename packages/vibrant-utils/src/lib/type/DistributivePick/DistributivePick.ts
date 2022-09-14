export type DistributivePick<Type, Key extends keyof Type> = Type extends unknown ? Pick<Type, Key> : never;
