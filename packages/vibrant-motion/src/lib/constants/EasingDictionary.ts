export type EasingDictionary = {
  linear: (t: number) => number;
  easeInSine: (t: number) => number;
  easeOutSine: (t: number) => number;
};

export const easings: EasingDictionary = {
  linear: x => x,
  easeInSine: x => 1 - Math.cos((x * Math.PI) / 2),
  easeOutSine: x => Math.sin((x * Math.PI) / 2),
};
