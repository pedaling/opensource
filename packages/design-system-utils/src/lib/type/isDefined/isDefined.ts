export function isDefined<Value>(value: Value | undefined): value is Value {
  return value !== undefined;
}
