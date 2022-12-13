export function calculateDistance(fromElement: HTMLElement, toElement: HTMLElement): number {
  return toElement.getBoundingClientRect().left - fromElement.getBoundingClientRect().right;
}
