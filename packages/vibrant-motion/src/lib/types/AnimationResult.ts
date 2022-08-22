export type AnimationResult<Value = any> = {
  value: Value;
  /** When true, no animation ever started. */
  noop?: boolean;
  /** When true, the animation was neither cancelled nor stopped prematurely. */
  finished?: boolean;
  /** When true, the animation was cancelled before it could finish. */
  cancelled?: boolean;
};
