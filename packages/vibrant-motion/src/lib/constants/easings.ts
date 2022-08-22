export type EasingDictionary = {
  linear: (t: number) => number;
  easeInQuad: (t: number) => number;
  easeOutQuad: (t: number) => number;
};

export const easings: EasingDictionary = {
  linear: x => x,
  easeInQuad: x => x * x,
  easeOutQuad: x => 1 - (1 - x) * (1 - x),
};
