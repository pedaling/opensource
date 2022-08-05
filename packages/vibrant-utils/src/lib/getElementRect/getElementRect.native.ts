import type { Rect, TargetElement } from './type';

export function getElementRect(element: TargetElement): Promise<Rect> {
  return new Promise(resolve => {
    element.measureInWindow((x: number, y: number, width: number, height: number) => {
      resolve({ x, y, width, height });
    });
  });
}
