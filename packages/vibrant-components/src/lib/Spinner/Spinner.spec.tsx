import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { Spinner } from './Spinner';

describe('<Spinner />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;

  describe('when Spinner rendered', () => {
    beforeEach(() => {
      renderer = render(<Spinner size="sm" />);
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });
});
