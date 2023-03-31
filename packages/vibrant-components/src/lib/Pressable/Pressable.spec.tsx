import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { Pressable } from './Pressable';

describe('<Pressable />', () => {
  const { render } = createReactRenderer();
  let renderer: ReactRenderer;

  describe('when href provided', () => {
    beforeEach(() => {
      renderer = render(<Pressable href="https://www.vibrant-design.com" />);
    });

    it('should render link with href attribute', () => {
      expect(renderer.getByRole('link').getAttribute('href')).toBe('https://www.vibrant-design.com');
    });
  });
});
