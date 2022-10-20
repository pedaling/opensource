import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { Divider } from './Divider';

describe('<Divider />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;
  let element: HTMLElement;

  describe('when Divider with margin rendered', () => {
    beforeEach(() => {
      renderer = render(<Divider data-testid="divider" direction="horizontal" margin="md" kind="default" />);

      element = renderer.getByTestId('divider');
    });

    it('my is 16', () => {
      expect(element).toHaveStyleRule('margin-top', '16px');

      expect(element).toHaveStyleRule('margin-bottom', '16px');
    });

    it('width is 100%', () => {
      expect(element).toHaveStyleRule('width', '100%');
    });

    it('border-top-width is 1px', () => {
      expect(element).toHaveStyleRule('border-top-width', '1px');
    });

    it('match snapshot', () => {
      expect(element).toMatchSnapshot();
    });
  });
});
