import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { Form } from './Form';

describe('<Form />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;

  describe('when Form rendered', () => {
    beforeEach(async () => {
      renderer = render(<Form data-testid="form" />);
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });
});
