import { baseTheme } from '@class101/design-system-theme';
import * as ThemeModule from '../ThemeProvider';
import { interpolation } from './interpolation';

jest.spyOn(ThemeModule, 'useCurrentTheme').mockReturnValue({
  theme: {
    breakpoints: baseTheme.breakpoints,
    colors: baseTheme.colors.light,
    opacity: baseTheme.opacity.light,
  },
});

describe('interpolation', () => {
  const mockInterpolation = jest.fn(interpolation);

  afterEach(() => {
    mockInterpolation.mockClear();
  });

  describe('when prop is 1 depth object', () => {
    describe('if prop value is responsive value', () => {
      beforeEach(() => {
        mockInterpolation({ width: [100, 200], height: [100, 200] });
      });

      it('systemProp return value is merged by media query key', () => {
        expect(mockInterpolation).toReturnWith({
          width: 100,
          height: 100,
          [`@media screen and (min-width: ${baseTheme.breakpoints[0]}px)`]: {
            width: 200,
            height: 200,
          },
        });
      });

      describe('if prop include non-systemProp key', () => {
        beforeEach(() => {
          mockInterpolation({ width: 100, disabled: true });
        });

        it('should removed non-systemProp key', () => {
          expect(mockInterpolation).toReturnWith({ width: 100 });
        });
      });

      describe('if prop has only non-systemProp key', () => {
        beforeEach(() => {
          mockInterpolation({ disabled: true });
        });

        it('should return empty object', () => {
          expect(mockInterpolation).toReturnWith({});
        });
      });
    });
  });

  describe('when prop is 2 depth object', () => {
    beforeEach(() => {
      mockInterpolation({ pseudoFocus: { backgroundColor: 'primary' } });
    });

    it('should return return value of all nested systemProp', () => {
      expect(mockInterpolation).toReturnWith({ '&:focus': { backgroundColor: '#FF5B14' } });
    });
  });
});
