import { isDefined } from '@vibrant-ui/utils';
import type { ResponsiveValue } from '../../types';

export const transformResponsiveValue = <Value, TransformReturn>(
  value: ResponsiveValue<Value> | undefined,
  transform: (value: Value) => TransformReturn
): ResponsiveValue<TransformReturn> | undefined =>
  isDefined(value) ? (Array.isArray(value) ? value.map(transform) : transform(value)) : value;
