import * as ThemeModule from '@vibrant-ui/core';
import type { ColorToken, CurrentTheme } from '@vibrant-ui/theme';
import type { DeepPartial } from '@vibrant-ui/utils';
import type { Animation } from '../types';
import type { StyleConfig } from './motionVariant';
import { motionVariant } from './motionVariant';

const testMotionVariant =
  <Props extends { style: Record<string, Animation<any>> }>() =>
  <Config extends StyleConfig<Props>>(args: Config) =>
    motionVariant<Props, Config>(args);

(
  jest.spyOn(ThemeModule, 'useCurrentTheme') as jest.SpyInstance<{
    theme: DeepPartial<CurrentTheme>;
  }>
).mockReturnValue({
  theme: {
    breakpoints: [640],
    colors: {
      primary: 'red',
      informative: 'yellow',
    },
    opacity: {},
  },
});

describe('motionVariant', () => {
  describe('when backgroundColor motionVariant defined', () => {
    type Props = { style: { backgroundColor: Animation<ColorToken> } };
    const motionVariantFn = testMotionVariant<Props>()({
      name: 'backgroundColor',
      scale: 'colors',
    });

    describe('passed backgroundColor with color', () => {
      let result: Props;

      beforeEach(() => {
        result = motionVariantFn({ style: { backgroundColor: { from: 'primary', to: 'informative' } } });
      });

      it('return prop is converted to color value', () => {
        expect(result.style.backgroundColor).toStrictEqual({
          from: 'red',
          to: 'yellow',
        });
      });
    });
  });
});
