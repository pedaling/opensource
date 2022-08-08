import type { Rect, TargetElement } from './type';

export function getElementRect(element: TargetElement): Promise<Rect> {
  return new Promise(resolve => {
    if (element.measureInWindow) {
      element.measureInWindow((x: number, y: number, width: number, height: number) => {
        resolve({ x, y, width, height });
      });
    } else {
      const observer = new IntersectionObserver(([entry], observer) => {
        observer.disconnect();
  
        const { boundingClientRect } = entry;
        const { x, y, width, height } = boundingClientRect;
  
        resolve({ x, y, width, height });
      });
  
      observer.observe(element);
    }
  });
}
