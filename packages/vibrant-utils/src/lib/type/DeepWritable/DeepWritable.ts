/* eslint-disable @typescript-eslint/ban-types */

export type DeepWritable<Type> = Type extends
  | Date
  | Error
  | Function
  | RegExp
  | boolean
  | number
  | string
  | null
  | undefined
  ? Type
  : Type extends Map<infer K, infer V>
  ? Map<DeepWritable<K>, DeepWritable<V>>
  : Type extends ReadonlyMap<infer K, infer V>
  ? Map<DeepWritable<K>, DeepWritable<V>>
  : Type extends WeakMap<infer K, infer V>
  ? WeakMap<DeepWritable<K>, DeepWritable<V>>
  : Type extends Set<infer U>
  ? Set<DeepWritable<U>>
  : Type extends ReadonlySet<infer U>
  ? Set<DeepWritable<U>>
  : Type extends WeakSet<infer U>
  ? WeakSet<DeepWritable<U>>
  : Type extends Promise<infer U>
  ? Promise<DeepWritable<U>>
  : Type extends Record<string, any>
  ? { -readonly [K in keyof Type]: DeepWritable<Type[K]> }
  : Type;
