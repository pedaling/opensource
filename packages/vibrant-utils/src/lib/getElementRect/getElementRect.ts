import type { Rect, TargetElement } from './type';

export function getElementRect(element: TargetElement): Promise<Rect> {
  return new Promise(resolve => {
    const observer = new IntersectionObserver(([entry], observer) => {
      observer.disconnect();

      const { boundingClientRect } = entry;
      const { x, y, width, height } = boundingClientRect;

      resolve({ x, y, width, height });
    });

    observer.observe(element);
  });
}
