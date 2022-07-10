import type { ReactRenderer } from '@vibrant-ui/utils/testing';
import { createReactRenderer } from '@vibrant-ui/utils/testing';
import { Space } from './Space';

describe('<Space />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;
  let element: HTMLElement;

  describe('when Space rendered', () => {
    beforeEach(() => {
      renderer = render(<Space data-testid="space" width={20} />);

      element = renderer.getByTestId('space');
    });

    it('width style applied', () => {
      expect(element).toHaveStyleRule('width', '20px');
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when hidden Space rendered', () => {
    beforeEach(() => {
      renderer = render(<Space data-testid="space" visible={false} />);

      element = renderer.getByTestId('space');
    });

    it('space component is hidden', () => {
      expect(element).toHaveStyleRule('display', 'none');
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });
});
