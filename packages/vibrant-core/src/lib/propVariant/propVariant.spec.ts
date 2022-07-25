import type { ResponsiveValue } from '../types';
import { propVariant } from './propVariant';
import type { AnyPropConfig, VariantsConfig } from './type';

const testPropVariant =
  <Props>() =>
  <PropsConfig extends AnyPropConfig<Props>[], Variants extends VariantsConfig<Props, PropsConfig>>(args: {
    props: [...PropsConfig];
    variants: Variants;
  }) =>
    propVariant<Props, PropsConfig, Variants>(args);

describe('propVariant', () => {
  describe('variants type is object', () => {
    describe('prop is responsive value', () => {
      const propVariantFn = testPropVariant<{
        size: ResponsiveValue<'md' | 'sm'>;
      }>()({
        props: [
          {
            name: 'size',
            responsive: true,
          },
        ],
        variants: {
          sm: {
            width: 10,
          },
          md: {
            width: 20,
          },
        },
      });

      it('should return variants value by received prop value', () => {
        expect(propVariantFn({ size: 'sm' })).toStrictEqual({ width: [10] });

        expect(propVariantFn({ size: ['sm', 'md'] })).toStrictEqual({
          width: [10, 20],
        });
      });
    });

    describe('prop is not responsive value', () => {
      const propVariantFn = testPropVariant<{
        kind: 'primary' | 'secondary';
      }>()({
        props: [
          {
            name: 'kind',
          },
        ],
        variants: {
          primary: {
            backgroundColor: 'orange',
          },
          secondary: {
            backgroundColor: 'black',
          },
        },
      });

      it('should return variants value by received prop value', () => {
        expect(propVariantFn({ kind: 'primary' })).toStrictEqual({
          backgroundColor: 'orange',
        });

        expect(propVariantFn({ kind: 'secondary' })).toStrictEqual({
          backgroundColor: 'black',
        });
      });
    });

    describe('prop is optional', () => {
      describe('with no default value', () => {
        const propVariantFn = testPropVariant<{
          kind?: 'primary' | 'secondary';
        }>()({
          props: [
            {
              name: 'kind',
            },
          ],
          variants: {
            primary: {
              backgroundColor: 'orange',
            },
            secondary: {
              backgroundColor: 'black',
            },
          },
        });

        it('should return empty object', () => {
          expect(propVariantFn({})).toStrictEqual({});
        });
      });

      describe('with default value', () => {
        const propVariantFn = testPropVariant<{
          kind?: 'primary' | 'secondary';
        }>()({
          props: [
            {
              name: 'kind',
              default: 'primary',
            },
          ],
          variants: {
            primary: {
              backgroundColor: 'orange',
            },
            secondary: {
              backgroundColor: 'black',
            },
          },
        });

        it('should return default variants value', () => {
          expect(propVariantFn({})).toStrictEqual({
            backgroundColor: 'orange',
          });
        });
      });
    });

    describe('if keep is true', () => {
      const propVariantFn = testPropVariant<{
        kind: 'primary' | 'secondary';
      }>()({
        props: [
          {
            name: 'kind',
            keep: true,
          },
        ],
        variants: {
          primary: {
            backgroundColor: 'orange',
          },
          secondary: {
            backgroundColor: 'black',
          },
        },
      });

      it('should return variant value with prop', () => {
        expect(propVariantFn({ kind: 'primary' })).toStrictEqual({
          kind: 'primary',
          backgroundColor: 'orange',
        });
      });
    });
  });

  describe('when variants type is function', () => {
    let result: Record<string, any>;
    const variantsFn = jest.fn(({ size, disabled }) => {
      if (size === 'sm') {
        return {
          width: 10,
          backgroundColor: disabled ? 'gray' : 'orange',
        };
      }

      if (size === 'md') {
        return {
          width: 20,
          backgroundColor: disabled ? 'gray' : 'orange',
        };
      }

      return {};
    });

    afterEach(() => {
      variantsFn.mockClear();
    });

    describe('prop is responsive value', () => {
      beforeEach(() => {
        const propVariantFn = testPropVariant<{
          size: ResponsiveValue<'md' | 'sm'>;
          disabled?: boolean;
        }>()({
          props: [
            {
              name: 'size',
              responsive: true,
            },
            {
              name: 'disabled',
            },
          ],
          variants: variantsFn,
        });

        result = propVariantFn({ size: ['sm', 'sm', 'md'], disabled: false });
      });

      it('variants function called 3 times', () => {
        expect(variantsFn).toBeCalledTimes(3);

        expect(variantsFn).nthCalledWith(1, { size: 'sm', disabled: false });

        expect(variantsFn).nthCalledWith(2, { size: 'sm', disabled: false });

        expect(variantsFn).nthCalledWith(3, { size: 'md', disabled: false });
      });

      it('should return merged values by key', () => {
        expect(result).toStrictEqual({
          width: [10, 10, 20],
          backgroundColor: ['orange', 'orange', 'orange'],
        });
      });
    });

    describe('prop is not responsive value', () => {
      const propVariantFn = testPropVariant<{
        size: 'md' | 'sm';
        disabled: boolean;
      }>()({
        props: [
          {
            name: 'size',
          },
          {
            name: 'disabled',
          },
        ],
        variants: variantsFn,
      });

      beforeEach(() => {
        result = propVariantFn({ size: 'sm', disabled: true });
      });

      it('variants function called only once', () => {
        expect(variantsFn).toBeCalledTimes(1);

        expect(variantsFn).nthCalledWith(1, { size: 'sm', disabled: true });
      });

      it('should return width is 10 and backgroundColor is gray', () => {
        expect(result).toStrictEqual({ width: 10, backgroundColor: 'gray' });
      });
    });

    describe('prop is optional', () => {
      describe('with no default value', () => {
        beforeEach(() => {
          const propVariantFn = testPropVariant<{
            size?: 'md' | 'sm';
            disabled?: boolean;
          }>()({
            props: [
              {
                name: 'size',
              },
              {
                name: 'disabled',
              },
            ],
            variants: variantsFn,
          });

          result = propVariantFn({});
        });

        it('should called with value is undefined', () => {
          expect(variantsFn).toBeCalledWith({
            size: undefined,
            disabled: undefined,
          });
        });

        it('should return empty object', () => {
          expect(result).toStrictEqual({});
        });
      });

      describe('with default value', () => {
        beforeEach(() => {
          const propVariantFn = testPropVariant<{
            size?: 'md' | 'sm';
            disabled?: boolean;
          }>()({
            props: [
              {
                name: 'size',
                default: 'md',
              },
              {
                name: 'disabled',
                default: false,
              },
            ],
            variants: variantsFn,
          });

          result = propVariantFn({});
        });

        it('should called with default value', () => {
          expect(variantsFn).toBeCalledWith({ size: 'md', disabled: false });
        });

        it('should return default variants value', () => {
          expect(result).toStrictEqual({
            width: 20,
            backgroundColor: 'orange',
          });
        });
      });
    });
  });
});
