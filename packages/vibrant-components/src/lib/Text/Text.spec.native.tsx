import { Text as RNText } from 'react-native';
import type { ReactNativeRenderer } from '@vibrant-ui/utils/testing';
import { createReactNativeRenderer } from '@vibrant-ui/utils/testing';
import { Text } from './Text';

describe('native <Text />', () => {
  const { render } = createReactNativeRenderer();
  let renderer: ReactNativeRenderer;

  describe('when title1 Text rendered', () => {
    beforeEach(() => {
      renderer = render(
        <Text kind="title1" weight="bold">
          Something
        </Text>
      );
    });

    it('RNText element rendered', () => {
      expect(renderer.container.findByType(RNText)).toBeTruthy();
    });

    it('element have text', () => {
      expect(renderer.container.findByType(RNText).props['children'][0]).toBe('Something');
    });

    it('element have title1 style', () => {
      expect(renderer.container.findByType(RNText)).toHaveStyle({
        fontSize: 34,
        lineHeight: 44,
        fontWeight: '700',
      });
    });

    it('match snapshot', () => {
      expect(renderer.toJSON()).toMatchSnapshot();
    });
  });

  describe('when Text with newline children rendered', () => {
    beforeEach(() => {
      renderer = render(<Text kind="title1">{'Some\nThing'}</Text>);
    });

    it('new line Text element created', () => {
      expect(renderer.container.findByProps({ children: '\n' })).toBeTruthy();
    });

    it('match snapshot', () => {
      expect(renderer.toJSON()).toMatchSnapshot();
    });
  });
});
