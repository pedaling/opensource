import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { PasswordField } from './PasswordField';

describe('<PasswordField />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;

  describe('when size is lg', () => {
    beforeEach(async () => {
      renderer = render(<PasswordField size="lg" label="label" />);
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when size is md', () => {
    beforeEach(async () => {
      renderer = render(<PasswordField size="md" label="label" />);
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when size is sm', () => {
    beforeEach(async () => {
      renderer = render(<PasswordField size="sm" label="label" />);
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });
});
