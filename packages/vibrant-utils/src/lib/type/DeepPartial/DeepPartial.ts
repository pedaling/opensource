export type DeepPartial<Value> = Value extends object
  ? {
      [Key in keyof Value]?: DeepPartial<Value[Key]>;
    }
  : Value;
