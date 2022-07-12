import { createSystemProp } from './createSystemProp';
import type { SystemProp, SystemPropThemeScale } from './type';

describe('createSystemProp', () => {
  let systemProp: SystemProp;
  let currentTheme: Record<SystemPropThemeScale, any>;

  beforeEach(() => {
    currentTheme = {
      colors: {},
      opacity: {},
      typography: {},
      typographyWeight: {},
    };
  });

  describe('when only property set', () => {
    beforeEach(() => {
      systemProp = createSystemProp({
        property: 'height',
      });
    });

    it('height transform to height', () => {
      expect(systemProp(300, currentTheme)).toStrictEqual([{ height: 300 }]);
    });

    it('systemProp propName is height', () => {
      expect(systemProp.propName).toBe('height');
    });

    it('systemProp disabled is false', () => {
      expect(systemProp.disabled).toBe(false);
    });

    it('empty value transform empty value', () => {
      expect(systemProp(undefined, currentTheme)).toStrictEqual([]);
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
      expect(systemProp(300, currentTheme)).toStrictEqual([]);
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
      expect(systemProp(10, currentTheme)).toStrictEqual([{ padding: 10 }]);
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
        style = systemProp(true, currentTheme);
      });

      it('cursor pointer set', () => {
        expect(style).toStrictEqual([{ cursor: 'pointer' }]);
      });
    });

    describe('when pressable is false', () => {
      let style: object;

      beforeEach(() => {
        style = systemProp(false, currentTheme);
      });

      it('empty object set', () => {
        expect(style).toStrictEqual([{}]);
      });
    });
  });

  describe('when scale set', () => {
    beforeEach(() => {
      currentTheme = {
        colors: {
          primary: 'orange',
          secondary: 'black',
        },
        opacity: {},
        typography: {},
        typographyWeight: {},
      };

      systemProp = createSystemProp({
        property: 'backgroundColor',
        scale: 'colors',
      });
    });

    it('backgroundColor primary is orange', () => {
      expect(systemProp('primary', currentTheme)).toStrictEqual([
        {
          backgroundColor: 'orange',
        },
      ]);
    });

    it('backgroundColor secondary is black', () => {
      expect(systemProp('secondary', currentTheme)).toStrictEqual([
        {
          backgroundColor: 'black',
        },
      ]);
    });
  });

  describe('when responsive value passed', () => {
    beforeEach(() => {
      systemProp = createSystemProp({
        property: 'width',
      });
    });

    it('responsive value array result', () => {
      expect(systemProp([200, 300], currentTheme)).toStrictEqual([
        {
          width: 200,
        },
        { width: 300 },
      ]);
    });
  });

  describe('when shouldInterpolation is before', () => {
    let mockInterpolation: (props: any) => any;

    beforeEach(() => {
      mockInterpolation = jest.fn(props => props);

      systemProp = createSystemProp({
        property: 'pseudoHover',
        styleProperty: '&:hover',
        shouldInterpolation: 'before',
      });
    });

    describe('when use object value', () => {
      let result: any;

      beforeEach(() => {
        result = systemProp({ backgroundColor: 'white' }, currentTheme, mockInterpolation);
      });

      it('interpolation called with backgroundColor', () => {
        expect(mockInterpolation).toBeCalledWith({ backgroundColor: 'white' });
      });

      it('set style in &:hover', () => {
        expect(result).toStrictEqual([{ '&:hover': { backgroundColor: 'white' } }]);
      });
    });
  });

  describe('when shouldInterpolation is after', () => {
    let mockInterpolation: (props: any) => any;

    beforeEach(() => {
      mockInterpolation = jest.fn(props => props);

      systemProp = createSystemProp({
        property: 'redBackground',
        transform: value => (value ? { backgroundColor: 'red' } : {}),
        shouldInterpolation: 'after',
      });
    });

    describe('when use object value', () => {
      let result: any;

      beforeEach(() => {
        result = systemProp({ redBackground: true }, currentTheme, mockInterpolation);
      });

      it('interpolation called with backgroundColor', () => {
        expect(mockInterpolation).toBeCalledWith({ backgroundColor: 'red' });
      });

      it('style is background', () => {
        expect(result).toStrictEqual([{ backgroundColor: 'red' }]);
      });
    });
  });

  describe('when value starts with $', () => {
    beforeEach(() => {
      currentTheme = {
        colors: {
          onView1: 'black',
          onColor: '$colors.onView1',
        },
        opacity: {},
        typography: {},
        typographyWeight: {},
      };

      systemProp = createSystemProp({
        property: 'color',
        scale: 'colors',
      });
    });

    it('should convert to theme value', () => {
      expect(systemProp('onColor', currentTheme)).toStrictEqual([{ color: currentTheme.colors.onView1 }]);
    });
  });
});
