import type { CurrentTheme } from '@vibrant-ui/theme';
import type { DeepPartial } from '@vibrant-ui/utils';
import * as ThemeModule from '../ThemeProvider';
import { createSystemProp } from './createSystemProp';
import type { SystemProp } from './type';
import SpyInstance = jest.SpyInstance;

const useCurrentTheme = jest.spyOn(ThemeModule, 'useCurrentTheme') as SpyInstance<{ theme: DeepPartial<CurrentTheme> }>;

describe('createSystemProp', () => {
  let systemProp: SystemProp;

  beforeEach(() => {
    useCurrentTheme.mockImplementation(() => ({
      theme: {
        breakpoints: [],
        colors: {},
        opacity: {},
      },
    }));
  });

  describe('when only property set', () => {
    beforeEach(() => {
      systemProp = createSystemProp({
        property: 'height',
      });
    });

    it('height transform to height', () => {
      expect(systemProp({ height: 300 })).toEqual({ height: 300 });
    });

    it('systemProp propName is height', () => {
      expect(systemProp.propName).toBe('height');
    });

    it('systemProp disabled is false', () => {
      expect(systemProp.disabled).toBe(false);
    });

    it('empty object transform empty object', () => {
      expect(systemProp({})).toEqual({});
    });
  });

  describe('when property disabled', () => {
    beforeEach(() => {
      systemProp = createSystemProp({
        property: 'width',
        disabled: true,
      });
    });

    it('systemProp disabled is true', () => {
      expect(systemProp.disabled).toBe(true);
    });

    it('width not transform', () => {
      expect(systemProp({ width: 300 })).toEqual({});
    });
  });

  describe('when styleProperty set', () => {
    beforeEach(() => {
      systemProp = createSystemProp({
        property: 'p',
        styleProperty: 'padding',
      });
    });

    it('p transform to padding', () => {
      expect(systemProp({ p: 10 })).toEqual({ padding: 10 });
    });
  });

  describe('when transform set', () => {
    beforeEach(() => {
      systemProp = createSystemProp({
        property: 'pressable',
        transform: pressable => {
          if (pressable) {
            return {
              cursor: 'pointer',
            };
          }

          return undefined;
        },
      });
    });

    describe('when pressable is true', () => {
      let style: object;

      beforeEach(() => {
        style = systemProp({ pressable: true });
      });

      it('cursor pointer set', () => {
        expect(style).toEqual({ cursor: 'pointer' });
      });
    });

    describe('when pressable is false', () => {
      let style: object;

      beforeEach(() => {
        style = systemProp({ pressable: false });
      });

      it('empty object set', () => {
        expect(style).toEqual({});
      });
    });
  });

  describe('when scale set', () => {
    beforeEach(() => {
      useCurrentTheme.mockImplementation(() => ({
        theme: {
          breakpoints: [],
          colors: {
            primary: 'orange',
            secondary: 'black',
          },
          opacity: {},
        },
      }));

      systemProp = createSystemProp({
        property: 'backgroundColor',
        scale: 'colors',
      });
    });

    it('backgroundColor primary is orange', () => {
      expect(systemProp({ backgroundColor: 'primary' })).toEqual({
        backgroundColor: 'orange',
      });
    });

    it('backgroundColor secondary is black', () => {
      expect(systemProp({ backgroundColor: 'secondary' })).toEqual({
        backgroundColor: 'black',
      });
    });
  });

  describe('when breakpoints set', () => {
    beforeEach(() => {
      useCurrentTheme.mockImplementation(() => ({
        theme: {
          breakpoints: [200, 400],
          colors: {},
          opacity: {},
        },
      }));

      systemProp = createSystemProp({
        property: 'width',
      });
    });

    it('responsive value create media query', () => {
      expect(systemProp({ width: [200, 300] })).toEqual({
        width: 200,
        '@media screen and (min-width: 200px)': { width: 300 },
      });
    });
  });
});
