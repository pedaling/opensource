export type TimingFunctions = {
  linear: [number, number, number, number];
  easeInQuad: [number, number, number, number];
  easeOutQuad: [number, number, number, number];
};

export const timingFunctions: TimingFunctions = {
  linear: [0, 0, 1, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
};
