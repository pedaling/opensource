import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { TextField } from './TextField';

describe('<TextField />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;

  describe('when size is lg', () => {
    beforeEach(async () => {
      renderer = render(<TextField size="lg" label="label" />);
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when size is md', () => {
    beforeEach(async () => {
      renderer = render(<TextField size="md" label="label" />);
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when size is sm', () => {
    beforeEach(async () => {
      renderer = render(<TextField size="sm" label="label" />);
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });
});
