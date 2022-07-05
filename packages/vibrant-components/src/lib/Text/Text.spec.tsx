import type { ReactRenderer } from '@vibrant-ui/utils/testing';
import { createReactRenderer } from '@vibrant-ui/utils/testing';
import { Text } from './Text';

describe('<Text />', () => {
  const { render } = createReactRenderer();
  let renderer: ReactRenderer;

  describe('when title1 Text rendered', () => {
    beforeEach(() => {
      renderer = render(
        <Text kind="title1" weight="bold">
          Something
        </Text>
      );
    });

    it('span element rendered', () => {
      expect(renderer.container.querySelector('span')).toBeTruthy();
    });

    it('element have text', () => {
      expect(renderer.container.querySelector('span')?.textContent).toBe('Something');
    });

    it('element have title1 style', () => {
      const element = renderer.container.querySelector('span');

      expect(element).toHaveStyleRule('font-size', '2.125rem');

      expect(element).toHaveStyleRule('font-weight', '700');

      expect(element).toHaveStyleRule('line-height', '2.75rem');
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when Text with newline children rendered', () => {
    beforeEach(() => {
      renderer = render(<Text kind="title1">{'Some\nThing'}</Text>);
    });

    it('br tag created', () => {
      expect(renderer.container.querySelector('br')).toBeTruthy();
    });

    it('element have text', () => {
      expect(renderer.container.querySelector('span')?.textContent).toBe('SomeThing');
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });
});
