export type UnResponsiveValue<Value> = Value extends (infer T)[] ? (T extends any[] ? T : never) : Value;
