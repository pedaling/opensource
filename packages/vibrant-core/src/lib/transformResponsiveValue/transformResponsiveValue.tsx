import type { ResponsiveValue } from '../../types';

export const transformResponsiveValue = <Value, TransformReturn>(
  value: ResponsiveValue<Value>,
  transform: (value: Value) => TransformReturn
): ResponsiveValue<TransformReturn> => (Array.isArray(value) ? value.map(transform) : transform(value));
