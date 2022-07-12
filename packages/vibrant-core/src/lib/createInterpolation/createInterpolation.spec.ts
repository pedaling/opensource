import type { CurrentTheme } from '@vibrant-ui/theme';
import type { DeepPartial } from '@vibrant-ui/utils';
import { createSystemProp } from '../createSystemProp';
import * as ThemeModule from '../ThemeProvider';
import { createInterpolation } from './createInterpolation';

(
  jest.spyOn(ThemeModule, 'useCurrentTheme') as jest.SpyInstance<{
    theme: DeepPartial<CurrentTheme>;
  }>
).mockReturnValue({
  theme: {
    breakpoints: [640],
    colors: {},
    opacity: {},
  },
});

const widthProp = createSystemProp({
  property: 'width',
});

const heightProp = createSystemProp({
  property: 'height',
});

const marginProp = createSystemProp({
  property: 'm',
  styleProperty: 'margin',
});

const pseudoHoverProp = createSystemProp({
  property: 'pseudoHover',
  transform: value => ({
    '&:hover': value,
  }),
  shouldInterpolation: 'before',
});

describe('createInterpolation', () => {
  const interpolation = createInterpolation([widthProp, heightProp, marginProp, pseudoHoverProp]);
  let props: Record<string, any>;

  describe('when prop is 1 depth object', () => {
    describe('if prop value is responsive value', () => {
      beforeEach(() => {
        props = { width: [100, 200], height: [100, 200] };
      });

      it('systemProp return value is merged by media query key', () => {
        expect(interpolation(props)).toStrictEqual({
          width: 100,
          height: 100,
          '@media screen and (min-width: 640px)': {
            width: 200,
            height: 200,
          },
        });
      });
    });

    describe('if prop include non-systemProp key', () => {
      beforeEach(() => {
        props = { width: 100, disabled: true };
      });

      it('should removed non-systemProp key', () => {
        expect(interpolation(props)).toStrictEqual({ width: 100 });
      });
    });

    describe('if prop has only non-systemProp key', () => {
      beforeEach(() => {
        props = { disabled: true };
      });

      it('should return empty object', () => {
        expect(interpolation(props)).toStrictEqual({});
      });
    });

    describe('if value is undefined', () => {
      beforeEach(() => {
        props = { width: undefined };
      });

      it('should return empty object', () => {
        expect(interpolation(props)).toStrictEqual({});
      });
    });
  });

  describe('when prop is 2 depth object', () => {
    beforeEach(() => {
      props = { pseudoHover: { m: 3 } };
    });

    it('should return return value of all nested systemProp', () => {
      expect(interpolation(props)).toStrictEqual({
        '&:hover': { margin: 3 },
      });
    });
  });
});
