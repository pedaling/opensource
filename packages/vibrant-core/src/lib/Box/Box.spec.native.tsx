import { View, Text, Pressable } from 'react-native';
import type { ReactNativeRenderer } from '@vibrant-ui/utils';
import { createReactNativeRenderer } from '@vibrant-ui/utils';
import { Box } from './Box';

describe('Native <Box />', () => {
  const { render } = createReactNativeRenderer();

  let renderer: ReactNativeRenderer;

  describe('as prop', () => {
    describe('when empty box created', () => {
      beforeEach(() => {
        renderer = render(<Box />);
      });

      it('View component used', () => {
        expect(renderer.container.findByType(View)).toBeTruthy();
      });

      it('match snapshot', () => {
        expect(renderer.toJSON()).toMatchSnapshot();
      });
    });

    describe('when span box created', () => {
      beforeEach(() => {
        renderer = render(<Box as="span" />);
      });

      it('Text component used', () => {
        expect(renderer.container.findByType(Text)).toBeTruthy();
      });

      it('match snapshot', () => {
        expect(renderer.toJSON()).toMatchSnapshot();
      });
    });
  });

  describe('base prop', () => {
    describe('when Pressable box created', () => {
      beforeEach(() => {
        renderer = render(<Box base={Pressable} id="component" />);
      });

      it('Pressable element created', () => {
        expect(renderer.container.findByType(Pressable)).toBeTruthy();
      });

      it('id prop injected', () => {
        expect(renderer.container.findByType(Pressable).props['id']).toBe('component');
      });

      it('match snapshot', () => {
        expect(renderer.toJSON()).toMatchSnapshot();
      });
    });
  });

  describe('default style', () => {
    describe('when styled box created', () => {
      beforeEach(() => {
        renderer = render(<Box width={300} height={300} />);
      });

      it('style apply on View', () => {
        expect(renderer.container.findByType(View)).toHaveStyle({
          width: 300,
          height: 300,
        });
      });

      it('match snapshot', () => {
        expect(renderer.toJSON()).toMatchSnapshot();
      });
    });
  });
});
