import type { SafeFunction } from '../SafeFunction';

export type PropertyKeys<Type> = {
  [Key in keyof Type]-?: Required<Type>[Key] extends SafeFunction ? never : Key;
}[keyof Type];
