import type { Position, Rect } from '../../types';
import { getOffsetByPosition } from './getOffsetByPosition';

describe('getOffsetByPosition', () => {
  let referenceRect: Rect;
  let targetRect: Rect;
  let position: Position;
  let spacing: number;

  const call = () => getOffsetByPosition({ referenceRect, targetRect, position, spacing });

  beforeEach(() => {
    referenceRect = { x: 0, y: 0, width: 50, height: 50 };

    targetRect = { x: 0, y: 0, width: 100, height: 100 };
  });

  describe('position is bottom', () => {
    beforeEach(() => {
      position = 'bottom';
    });

    it('return the offset of bottom position horizontally centered for referenceRect', () => {
      expect(call()).toEqual({ x: -25, y: 50 });
    });
  });

  describe('position is bottom-start', () => {
    beforeEach(() => {
      position = 'bottom-start';
    });

    it('return the offset of bottom position aligned to the left for referenceRect', () => {
      expect(call()).toEqual({ x: 0, y: 50 });
    });
  });

  describe('position is bottom-end', () => {
    beforeEach(() => {
      position = 'bottom-end';
    });

    it('return the offset of bottom position aligned to the right for referenceRect', () => {
      expect(call()).toEqual({ x: -50, y: 50 });
    });
  });

  describe('position is bottom-end', () => {
    beforeEach(() => {
      position = 'bottom-end';
    });

    it('return the offset of bottom position aligned to the right for referenceRect', () => {
      expect(call()).toEqual({ x: -50, y: 50 });
    });
  });

  describe('position is left', () => {
    beforeEach(() => {
      position = 'left';
    });

    it('return the offset of left position vertically centered for referenceRect', () => {
      expect(call()).toEqual({ x: -100, y: -25 });
    });
  });

  describe('position is left-start', () => {
    beforeEach(() => {
      position = 'left-start';
    });

    it('return the offset of left position aligned to the top for referenceRect', () => {
      expect(call()).toEqual({ x: -100, y: 0 });
    });
  });

  describe('position is left-end', () => {
    beforeEach(() => {
      position = 'left-end';
    });

    it('return the offset of left position aligned to the bottom for referenceRect', () => {
      expect(call()).toEqual({ x: -100, y: -50 });
    });
  });

  describe('position is right', () => {
    beforeEach(() => {
      position = 'right';
    });

    it('return the offset of right position vertically centered for referenceRect', () => {
      expect(call()).toEqual({ x: 50, y: -25 });
    });
  });

  describe('position is right-start', () => {
    beforeEach(() => {
      position = 'right-start';
    });

    it('return the offset of right position aligned to the top for referenceRect', () => {
      expect(call()).toEqual({ x: 50, y: 0 });
    });
  });

  describe('position is right-end', () => {
    beforeEach(() => {
      position = 'right-end';
    });

    it('return the offset of right position aligned to the bottom for referenceRect', () => {
      expect(call()).toEqual({ x: 50, y: -50 });
    });
  });

  describe('position is top', () => {
    beforeEach(() => {
      position = 'top';
    });

    it('return the offset of top position horizontally centered for referenceRect', () => {
      expect(call()).toEqual({ x: -25, y: -100 });
    });
  });

  describe('position is top-start', () => {
    beforeEach(() => {
      position = 'top-start';
    });

    it('return the offset of top position aligned to the left for referenceRect', () => {
      expect(call()).toEqual({ x: 0, y: -100 });
    });
  });

  describe('position is top-end', () => {
    beforeEach(() => {
      position = 'top-end';
    });

    it('return the offset of top position aligned to the right for referenceRect', () => {
      expect(call()).toEqual({ x: -50, y: -100 });
    });
  });

  describe('spacing is set', () => {
    beforeEach(() => {
      position = 'bottom';

      spacing = 8;
    });

    it('return the offset of the specified position with space between rects', () => {
      expect(call()).toEqual({ x: -25, y: 58 });
    });
  });
});
